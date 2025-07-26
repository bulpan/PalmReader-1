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
    <Card className="mb-6 bg-white dark:bg-mystic-800 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Globe className="w-5 h-5 text-mystic-purple dark:text-mystic-gold mr-2" />
          <h3 className="font-semibold text-mystic-700 dark:text-mystic-200">
            {t('culturalContext')}
          </h3>
          {autoDetected && (
            <Badge variant="secondary" className="ml-2 text-xs">
              <MapPin className="w-3 h-3 mr-1" />
              {t('autoDetected')}
            </Badge>
          )}
        </div>
        
        <div className="grid md:grid-cols-3 gap-3">
          {contexts.map((context) => (
            <Button
              key={context.id}
              variant={currentContext === context.id ? "default" : "outline"}
              onClick={() => onContextChange(context.id)}
              className={`p-4 h-auto text-left justify-start ${
                currentContext === context.id 
                  ? 'bg-mystic-purple hover:bg-purple-700 text-white' 
                  : 'hover:bg-mystic-50 dark:hover:bg-mystic-700'
              }`}
            >
              <div>
                <div className="font-medium text-sm mb-1">{context.name}</div>
                <div className="text-xs opacity-80 line-clamp-2">{context.description}</div>
              </div>
            </Button>
          ))}
        </div>
        
        <p className="text-xs text-mystic-500 dark:text-mystic-400 mt-3">
          {t('changeContext')}
        </p>
      </CardContent>
    </Card>
  );
}