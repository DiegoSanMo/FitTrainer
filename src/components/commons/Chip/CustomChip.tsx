import Chip from "@mui/material/Chip";

interface CustomChipI {
  type: string;
}

export default function CustomChip({ type }: CustomChipI) {
  return <Chip label={type} />;
}
