/**
 * Copyright (c) 2026, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { useEffect, useState } from "react";
import {
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Typography,
} from "@oxygen-ui/react";

interface SplashScreenProps {
    onClose: () => void;
}

/**
 * @component SplashScreen
 * @description A modal splash screen for Accounts Central shown once per session.
 * Must be rendered inside AppThemeProvider to receive the correct palette.
 */
const SplashScreen = ({ onClose }: SplashScreenProps) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setOpen(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setOpen(false);
        setTimeout(onClose, 300);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="splash-dialog-title"
            aria-describedby="splash-dialog-description"
            PaperProps={{
                sx: {
                    width: 620,
                    minHeight: 320,
                    borderRadius: "16px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    m: "auto",
                },
            }}
        >
            {/* Top accent bar */}
            <Box
                sx={{
                    height: "4px",
                    flexShrink: 0,
                    backgroundColor: "primary.main",
                }}
            />

            {/* ── Title ── */}
            <DialogTitle id="splash-dialog-title" sx={{ pt: 3, pb: 2, px: 3 }}>
                <Typography
                    variant="h5"
                    component="span"
                    sx={{
                        fontWeight: 700,
                        fontFamily: "inherit",
                        color: "primary.main",
                        lineHeight: 1.2,
                    }}
                >
                    Accounts Central
                </Typography>
            </DialogTitle>

            {/* ── Body ── */}
            <DialogContent
                id="splash-dialog-description"
                sx={{ pt: 0.5, pb: 3, px: 3, flex: 1 }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: "inherit",
                        color: "text.primary",
                        lineHeight: 1.75,
                        mb: 2.5,
                    }}
                >
                    An{" "}
                    <Typography
                        component="span"
                        variant="body1"
                        sx={{ fontWeight: 600, fontFamily: "inherit", color: "primary.main" }}
                    >
                        Open Banking
                    </Typography>{" "}
                    demo that lets you aggregate financial data using the{" "}
                    <Typography
                        component="span"
                        variant="body1"
                        sx={{ fontWeight: 600, fontFamily: "inherit", color: "text.primary" }}
                    >
                        Add Account
                    </Typography>{" "}
                    feature and simulate direct payments through{" "}
                    <Typography
                        component="span"
                        variant="body1"
                        sx={{ fontWeight: 600, fontFamily: "inherit", color: "text.primary" }}
                    >
                        Pay Bills
                    </Typography>
                    . Explore both AISP and PISP journeys end-to-end — all login and OTP
                    fields accept any alphanumeric input for simulation purposes.
                </Typography>

                {/* Feature chips */}
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {["AISP Journey", "PISP Journey", "Simulation Mode"].map((label) => (
                        <Chip
                            key={label}
                            label={label}
                            size="small"
                            color="primary"
                            variant="outlined"
                            sx={{
                                borderRadius: "6px",
                                fontFamily: "inherit",
                                fontWeight: 500,
                                fontSize: "0.75rem",
                            }}
                        />
                    ))}
                </Box>
            </DialogContent>

            <Divider />

            {/* ── Footer ── */}
            <DialogActions
                sx={{
                    px: 3,
                    py: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography
                    variant="caption"
                    sx={{ fontFamily: "inherit", color: "text.disabled" }}
                >
                    Demo environment — no real data is used
                </Typography>

                {/* Pill-shaped button matching the app's "Add Account" style */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClose}
                    autoFocus
                    sx={{
                        fontFamily: "inherit",
                        fontWeight: 600,
                        borderRadius: "50px",
                        px: 3,
                        py: 1,
                        textTransform: "none",
                        fontSize: "0.95rem",
                        boxShadow: "none",
                        "&:hover": {
                            boxShadow: "none",
                        },
                    }}
                >
                    OK, Got It
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default SplashScreen;
