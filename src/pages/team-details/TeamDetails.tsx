import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const TeamDetails = (props: Props) => {
  const params = useParams<any>();
  console.log(params)
  return (
    <div>This is team {params.teamId}</div>
  )
}

export default TeamDetails