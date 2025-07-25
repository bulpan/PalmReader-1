import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquare, Send } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertUserFeedback } from "@shared/schema";

export function UserFeedback() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");

  const feedbackMutation = useMutation({
    mutationFn: (data: InsertUserFeedback) => apiRequest("/api/feedback", "POST", data),
    onSuccess: () => {
      toast({
        title: "감사합니다. 고민해보고 만들어볼께요",
      });
      setEmail("");
      setRequest("");
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ["/api/feedback"] });
    },
    onError: () => {
      toast({
        title: "오류가 발생했습니다",
        description: "다시 시도해주세요",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !request) {
      toast({
        title: "모든 필드를 입력해주세요",
        variant: "destructive",
      });
      return;
    }
    feedbackMutation.mutate({ email, request });
  };

  return (
    <div className="mt-8 text-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-mystic-50 dark:bg-mystic-800 border-mystic-200 dark:border-mystic-700 hover:bg-mystic-100 dark:hover:bg-mystic-700"
            data-testid="button-feedback"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            이런 것도 해줘요
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]" data-testid="dialog-feedback">
          <DialogHeader>
            <DialogTitle>의견을 들려주세요</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">이메일 주소</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                data-testid="input-email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="request">요청사항</Label>
              <Textarea
                id="request"
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                placeholder="어떤 기능을 추가하면 좋을까요?"
                rows={4}
                required
                data-testid="textarea-request"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={feedbackMutation.isPending}
              data-testid="button-submit-feedback"
            >
              {feedbackMutation.isPending ? (
                "전송 중..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  의견 보내기
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}