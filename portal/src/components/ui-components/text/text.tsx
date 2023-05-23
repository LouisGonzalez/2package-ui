import { Typography, TypographyProps, styled } from '@mui/material'
import React from 'react'

export type TextProps = {
    style: StylesText;
    children: string;
} & TypographyProps;

export interface StylesText {
    color?: string;
    transform?: string;
    fontSize?: number;
    fontWeight?: number;
    fontStyle?: string;
    margin?: number;
}

export const ConstantsTypography = {
  Title: {
    color: "#000000",
    transform: "none",
    fontSize: 36,
    fontWeight: 24,
    fontStyle: "normal",
    margin: 10,
  },
  Subtitle: {
    color: "#000000",
    transform: "none",
    fontSize: 21,
    fontWeight: 500,
    fontStyle: "normal",
    margin: 10,
  },
  Subtitlev2: {
    color: "#000000",
    transform: "none",
    fontSize: 16,
    fontWeight: 700,
    fontStyle: "normal",
    margin: 10,
  },
  NormalText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: 300,
    fontStyle: "normal",
    margin: 10,
  },
};

export const CustomText = styled(Typography)(({ style }: TextProps) => ({
    color: style.color,
    transform: style.transform,
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    fontStyle: style.fontStyle,
    fontFamily: ['"Segoe UI"', 'Arial', 'sans-serif'].join(','),
    margin: style.margin
}));

export const Text = (props: TextProps) => {
    return (
        <CustomText {...props}>
            {props.children}
        </CustomText>
    )
}