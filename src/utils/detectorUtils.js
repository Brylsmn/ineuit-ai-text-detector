export const getColor = (percent) => {
  if (percent <= 20) return '#10b981';
  if (percent <= 40) return '#84cc16';
  if (percent <= 60) return '#eab308';
  if (percent <= 80) return '#f97316';
  return '#ef4444';
};

export const getEvaluation = (percent) => {
  if (percent <= 10) return "Your text is Human-Written";
  if (percent <= 49) return "Your text is mostly Human-Written";
  if (percent <= 69) return "Your text is a mix of Human and AI";
  if (percent <= 89) return "Your text is mostly AI-Generated";
  return "Your text is AI-Generated";
};

export const getArcData = (percent, radius = 50) => {
  const arcLength = Math.PI * radius;
  const strokeDasharray = arcLength;
  const strokeDashoffset = arcLength * (1 - percent / 100);

  return {
    strokeDasharray,
    strokeDashoffset,
    radius,
  };
};
