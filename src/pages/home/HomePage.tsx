import React from 'react';
import { Container, Box, ButtonGroup, Button } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import { useNavigate } from 'react-router-dom';
import { ABOUT_PATH } from 'navigation/CONSTANT';

function HomeIcon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
interface Props {}

const HomePage = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: 100 }}>
      <Container>
        <Box className="menu-list" display="flex">
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            disableElevation
          >
            <Button className="btn-style">
              <HomeIcon />
              Trang chủ
            </Button>
            <Button className="btn-style" onClick={() => navigate(ABOUT_PATH)}>
              Về chúng tôi
            </Button>
          </ButtonGroup>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
