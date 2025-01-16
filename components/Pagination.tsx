import { Pagination } from "@mui/material";
import { styled } from "@mui/system";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const StyledPagination = styled(Pagination)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
  "& .MuiPaginationItem-root": {
    backgroundColor: "#fef6e4",
    border: `2px solid #ff8c94`,
    color: "#ff8c94",
    borderRadius: "50%",
    padding: "8px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#ff8c94",
      color: "#fef6e4",
      cursor: "pointer",
    },
    "&.Mui-selected": {
      backgroundColor: "#ff8c94",
      color: "#fef6e4",
      borderColor: "#ff8c94",
    },
  },
}));

const CustomPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    onPageChange(page);
  };

  return (
    <StyledPagination
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
    />
  );
};

export default CustomPagination;
