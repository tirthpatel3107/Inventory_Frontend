import { Box, Card } from "@mui/material";

const ModernCard = ({ title, count }: any) => {
  return (
    <Card className="uniqueCard">
      <Box>
        <h4 className="m0 mb15">{title}</h4>
        <h2 className="m0">{count}</h2>
      </Box>
    </Card>
  );
};

export default ModernCard;
