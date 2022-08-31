import { Typography } from '@mui/material';
import { useDynamicSVGImport } from '../../../hooks/DynamicSVGImport';

const SVGIcon = ({ name }: { name: string }) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name);
  if (error) {
    return <Typography>Error</Typography>;
  }

  if (SvgIcon) {
    return <SvgIcon />;
  }

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return <Typography>Icon</Typography>;
};

export default SVGIcon;
