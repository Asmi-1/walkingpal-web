import { Typography } from "@mui/material";
import { about1, about2, about3, about4 } from "assets/png";
import { Image } from "components/Image";
import React, { FC } from "react";
import styles from "../about.module.scss";

export const Gallery: FC = ({}) => {
	return (
		<>
			<div className={styles.gallery}>
				<Image className={styles.about1} src={about1} alt="about1" />
				<Image className={styles.about2} src={about2} alt="about2" />
				<Image className={styles.about3} src={about3} alt="about3" />
				<Image className={styles.about4} src={about4} alt="about4" />
			</div>
			<Typography
				variant="h6"
				component="h2"
				minWidth="300px"
				width="70%"
				textAlign="center"
			>
				Every groundbreaking App begins with a series of small ideas that are
				combined into an all inclusive one. At WalkingPal, we wanted to change
				how consumers see the concept of walking to commute daily, by offering a
				simple and user-friendly platform they can trust. Now having a walking
				buddy anytime and anywhere is easier than ever!
			</Typography>
		</>
	);
};
