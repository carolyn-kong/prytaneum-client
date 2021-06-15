import * as React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import ChatContent, { Props as ChatContentProps } from './ChatContent';
import Chatbar, { Props as ChatbarProps } from './Chatbar';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1.5),
        height: '100%',
        width: '100%',
        minHeight: 600,
    },
}));

interface Props {
    className?: string;
    onScrollToBottom?: () => void;
}

export default function Chat({
    className,
    children,
    onSubmit,
    disabled,
    onScrollToBottom,
}: Props & ChatContentProps & ChatbarProps) {
    const classes = useStyles();
    return (
        <Grid container direction='column' className={clsx(className, classes.root)} wrap='nowrap' component={Paper}>
            <ChatContent onScrollToBottom={onScrollToBottom}>{children}</ChatContent>
            <Chatbar onSubmit={onSubmit} disabled={disabled} />
        </Grid>
    );
}

Chat.defaultProps = {
    className: undefined,
    onScrollToBottom: undefined,
};
