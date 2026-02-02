import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card } from '../ui/Card';
import type { KPI } from '../../types';

interface KPICardProps {
  kpi: KPI;
}

export function KPICard({ kpi }: KPICardProps) {
  const renderChange = () => {
    if (kpi.change === undefined || kpi.changeType === undefined) return null;

    const Icon =
      kpi.changeType === 'increase'
        ? TrendingUp
        : kpi.changeType === 'decrease'
        ? TrendingDown
        : Minus;

    const colorClass =
      kpi.changeType === 'increase'
        ? 'text-green-600'
        : kpi.changeType === 'decrease'
        ? 'text-red-600'
        : 'text-gray-500';

    return (
      <div className={`flex items-center gap-1 text-sm ${colorClass}`}>
        <Icon className="w-4 h-4" />
        <span>
          {kpi.change > 0 ? '+' : ''}
          {kpi.change}
          {kpi.unit || ''}
        </span>
      </div>
    );
  };

  return (
    <Card>
      <div className="flex flex-col">
        <span className="text-sm text-gray-500 mb-1">{kpi.label}</span>
        <div className="flex items-end justify-between">
          <span className="text-2xl font-bold text-gray-900">
            {kpi.value}
            {kpi.unit && !String(kpi.value).includes(kpi.unit) && (
              <span className="text-sm font-normal text-gray-500 ml-1">
                {kpi.unit}
              </span>
            )}
          </span>
          {renderChange()}
        </div>
      </div>
    </Card>
  );
}
