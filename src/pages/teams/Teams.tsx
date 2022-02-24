import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

type Props = {};

const listTeam = [1, 2, 3, 4, 5, 6, 7];

const Teams = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>List Teams: </h1>
      {listTeam.map((item) => (
        <div key={item}>
          <Button
            variant="outlined"
            onClick={() => {
              navigate(`${item}`);
            }}
          >
            Team {item}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Teams;
