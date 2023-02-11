import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Link,
  Typography,
} from "@mui/material";

interface ContactDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ContactDialog = (props: ContactDialogProps) => {
  const handleClose = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    props.setOpen(false);
  };

  return (
    <Dialog
      open={props.open}
      fullWidth
      onClose={handleClose}
      sx={{ textAlign: "center" }}
    >
      <DialogTitle>
        <Typography variant="h2">Kontakt</Typography>
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
        }}
      >
        <Link
          href="mailto: hellstromsamuel@gmail.com"
          sx={{ textDecoration: "none" }}
        >
          <IconButton sx={{ color: "#e04c3c" }}>
            <Email sx={{ height: "70px", width: "70px" }} />
          </IconButton>
          <Typography sx={{ fontSize: "20px", textDecoration: "underline" }}>
            Email
          </Typography>
          <Typography sx={{ color: "grey" }}>
            hellstromsamuel@gmail.com
          </Typography>
        </Link>

        <Divider />

        <Link
          href="https://www.linkedin.com/in/samuel-hellstrom/"
          sx={{ textDecoration: "none" }}
        >
          <IconButton>
            <LinkedIn
              sx={{ height: "70px", width: "70px", color: "#0072b1" }}
            />
          </IconButton>
          <Typography sx={{ fontSize: "20px", textDecoration: "underline" }}>
            LinkedIn
          </Typography>
          <Typography sx={{ color: "grey" }}>Samuel Hellstrøm</Typography>
        </Link>

        <Divider />

        <Link
          href="https://github.com//hellstromsamuel"
          sx={{ textDecoration: "none" }}
        >
          <IconButton>
            <GitHub sx={{ height: "70px", width: "70px", color: "#171515" }} />
          </IconButton>
          <Typography sx={{ fontSize: "20px", textDecoration: "underline" }}>
            GitHub
          </Typography>
          <Typography sx={{ color: "grey" }}>hellstromsamuel</Typography>
        </Link>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
