import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, MapPin } from 'lucide-react';
import type { CulturalContext } from '@shared/schema';

interface CulturalContextSelectorProps {
  currentContext: CulturalContext;
  autoDetected: boolean;
  onContextChange: (context: CulturalContext) => void;
}

export function CulturalContextSelector({ 
  currentContext, 
  autoDetected, 
  onContextChange 
}: CulturalContextSelectorProps) {
  const { t } = useTranslation();

  const contexts = [
    {
      id: 'western' as CulturalContext,
      name: t('westernTradition'),
      description: t('westernDescription'),
      color: 'bg-blue-100 dark:bg-blue-900/30 border-blue-300'
    },
    {
      id: 'eastern' as CulturalContext,
      name: t('easternTradition'),
      description: t('easternDescription'),
      color: 'bg-red-100 dark:bg-red-900/30 border-red-300'
    },
    {
      id: 'indian' as CulturalContext,
      name: t('indianTradition'),
      description: t('indianDescription'),
      color: 'bg-orange-100 dark:bg-orange-900/30 border-orange-300'
    }
  ];

  return (
    <Card className="mb-4 bg-white dark:bg-mystic-800 shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-sm">
            <Globe className="w-4 h-4 text-mystic-purple dark:text-mystic-gold mr-2" />
            <span className="font-medium text-mystic-700 dark:text-mystic-200">
              {t('culturalContext')}
            </span>
            {autoDetected && (
              <Badge variant="secondary" className="ml-2 text-xs px-1.5 py-0.5">
                <MapPin className="w-3 h-3 mr-1" />
                {t('autoDetected')}
              </Badge>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          {contexts.map((context) => (
            <Button
              key={context.id}
              variant={currentContext === context.id ? "default" : "outline"}
              onClick={() => onContextChange(context.id)}
              size="sm"
              className={`h-auto p-2 text-xs ${
                currentContext === context.id 
                  ? 'bg-mystic-purple hover:bg-purple-700 text-white' 
                  : 'hover:bg-mystic-50 dark:hover:bg-mystic-700'
              }`}
            >
              <div className="text-center">
                <div className="font-medium leading-tight">{context.name}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}