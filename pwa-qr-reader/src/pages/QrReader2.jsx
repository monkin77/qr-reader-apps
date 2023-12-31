import { Box, Typography } from "@mui/material";
import { useState } from "react";
import QrScanner2 from "../Components/QrScanner2";

const QrReaderPage2 = () => {
    const [data, setData] = useState("No Result");
    const [hasPermission, setHasPermission] = useState(true);

    const onScanResult2 = ({ data, cornerPoints }) => {
        console.log("corner points:", cornerPoints);
        setData(data);
    };

    const onPermRefused = () => {
        setHasPermission(false);
    };

    return (
        <Box>
            <Box
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    paddingTop: 3,
                    paddingBottom: 3,
                }}
            >
                <Typography variant="h4" color="white">
                    QrReader
                </Typography>
            </Box>

            <QrScanner2
                preferredCamera={"environment"}
                maxScansPerSecond={25}
                highlightScanRegion={true}
                highlightCodeOutline={false}
                onDecode={onScanResult2}
                onPermRefused={onPermRefused}
            />

            <Box
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    paddingTop: 3,
                    paddingBottom: 3,
                    marginRight: 5,
                    marginLeft: 5,
                }}
            >
                <Typography
                    color="white"
                    variant="body1"
                    sx={{ textAlign: "center" }}
                >
                    {hasPermission
                        ? data
                        : "Please give permission to access the camera and refresh the page"}
                </Typography>
            </Box>
        </Box>
    );
};

export default QrReaderPage2;
