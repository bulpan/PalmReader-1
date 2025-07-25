import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, XCircle, Clock, Eye } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { UserFeedback } from "@shared/schema";

export default function AdminPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedFeedback, setSelectedFeedback] = useState<UserFeedback | null>(null);

  const { data: feedbacks = [], isLoading } = useQuery({
    queryKey: ["/api/admin/feedback"],
    queryFn: () => apiRequest("/api/admin/feedback"),
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) =>
      apiRequest(`/api/admin/feedback/${id}`, "PATCH", { status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/feedback"] });
      setSelectedFeedback(null);
      toast({
        title: "상태가 업데이트되었습니다",
      });
    },
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "적용":
        return <Badge className="bg-red-500 text-white font-bold">적용</Badge>;
      case "거절":
        return <Badge variant="outline" className="line-through text-gray-500">거절</Badge>;
      default:
        return <Badge variant="secondary" className="text-gray-600">검토</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "적용":
        return <CheckCircle className="w-4 h-4 text-red-500" />;
      case "거절":
        return <XCircle className="w-4 h-4 text-gray-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>사용자 피드백 관리</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>이메일</TableHead>
                <TableHead>요청사항</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>날짜</TableHead>
                <TableHead>액션</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.isArray(feedbacks) && feedbacks.map((feedback: UserFeedback) => (
                <TableRow key={feedback.id}>
                  <TableCell>{feedback.email}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {feedback.request}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(feedback.status)}
                      {getStatusBadge(feedback.status)}
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(feedback.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedFeedback(feedback)}
                      data-testid={`button-view-${feedback.id}`}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      보기
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={!!selectedFeedback} onOpenChange={() => setSelectedFeedback(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>피드백 상세보기</DialogTitle>
          </DialogHeader>
          {selectedFeedback && (
            <div className="space-y-4">
              <div>
                <label className="font-semibold">이메일:</label>
                <p className="text-sm">{selectedFeedback.email}</p>
              </div>
              <div>
                <label className="font-semibold">요청사항:</label>
                <p className="text-sm whitespace-pre-wrap bg-gray-50 p-3 rounded">
                  {selectedFeedback.request}
                </p>
              </div>
              <div>
                <label className="font-semibold">현재 상태:</label>
                <div className="flex items-center gap-2 mt-1">
                  {getStatusIcon(selectedFeedback.status)}
                  {getStatusBadge(selectedFeedback.status)}
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button
                  onClick={() =>
                    updateStatusMutation.mutate({
                      id: selectedFeedback.id,
                      status: "거절",
                    })
                  }
                  variant="outline"
                  disabled={updateStatusMutation.isPending}
                  data-testid="button-reject"
                >
                  거절
                </Button>
                <Button
                  onClick={() =>
                    updateStatusMutation.mutate({
                      id: selectedFeedback.id,
                      status: "적용",
                    })
                  }
                  className="bg-red-500 hover:bg-red-600"
                  disabled={updateStatusMutation.isPending}
                  data-testid="button-apply"
                >
                  적용
                </Button>
                <Button
                  onClick={() =>
                    updateStatusMutation.mutate({
                      id: selectedFeedback.id,
                      status: "검토",
                    })
                  }
                  variant="secondary"
                  disabled={updateStatusMutation.isPending}
                  data-testid="button-review"
                >
                  검토
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}