import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";

export const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://devcv.ru/">
                Sergey Suprunov
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
