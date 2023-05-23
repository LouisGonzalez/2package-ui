import React, { Children, ReactNode } from "react";
import { Card, CardActions, CardContent } from '@mui/material'

export type PackageCardProps = {
  children: ReactNode | ReactNode[];
}

export function PackageCard({ children }: PackageCardProps) {

  const childrenContent = Children.toArray(children);

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>{childrenContent[0]}</CardContent>
      {childrenContent.length > 1 && (
        <CardActions>{childrenContent[1]}</CardActions>
      )}
    </Card>
  );
}
