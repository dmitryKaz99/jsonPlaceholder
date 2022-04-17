import Image from "next/image";
import loading from "../../assets/img/loading.svg";
import { FC } from "react";

export const MyPreloader: FC = () => <Image src={loading} alt="loading_svg" />;
