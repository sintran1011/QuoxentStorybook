import { Meta } from "@storybook/react";
import Layout from "@stories/Layout";
import { Box, debounce, Stack, Typography } from "@mui/material";
import Input from "@stories/Input";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import Button from "@stories/Button";

const meta: Meta<typeof Layout> = {
  title: "Quoxent/Layout",
  component: Layout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const DashboardLayout = () => {
  const [query, setQuery] = useState<any>({
    search: undefined,
    page: 0,
    size: 10,
  });

  const handleDebounceSearch = debounce((key: string) => {
    const value = key.trim();
    setQuery({ ...query, page: 0, search: value });
  }, 400);

  return (
    <Box
      width={"900px"}
      padding={3}
      borderRadius={"16px"}
      bgcolor={"dark.main"}
      mx={"auto"}
    >
      <Stack gap={3}>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            fontSize="24px"
            lineHeight="32px"
            color="#FBFBFB"
            variant="headline-small"
          >
            Version List
          </Typography>
          <Stack flexDirection={"row"} gap={"16px"}>
            <Input
              sx={{ height: "44px", width: "280px" }}
              noHint
              placeholder="Search..."
              startAdornment={<Search className="w-7 text-white/70" />}
              onChange={(e) => handleDebounceSearch(e.target.value)}
            />
            <Button>New Version</Button>
          </Stack>
        </Stack>
        <div className="h-[500px] w-full" />
      </Stack>
    </Box>
  );
};
