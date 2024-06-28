// import 'asciinema-player/dist/bundle/asciinema-player.css';
import './asciinema-player.css'; // We hacked the CSS of the asciinema-player located at 'asciinema-player/dist/bundle/asciinema-player.css'.

import {FC, useEffect, useRef, useState} from 'react';
import {useColorMode} from '@docusaurus/theme-common';

type Props = {
	src: string;
	cols: string;
	rows: string;
	autoPlay: boolean
	preload: boolean;
	loop: boolean | number;
	startAt: number | string;
	speed: number;
	idleTimeLimit: number;
	theme: string;
	poster: string;
	fit: string;
	fontSize: string;
};

const AsciinemaPlayer: FC<Props> = ({src, ...rest}) => {
	const [player, setPlayer] = useState<typeof import ('asciinema-player')>()
	useEffect(() => {
		import("asciinema-player").then(p => {setPlayer(p)})
	}, []) // executed once

	const { colorMode } = useColorMode();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(
		() => {
			const currentRef = ref.current

			const instance = player?.create(src, currentRef, {...rest, theme: colorMode === 'dark' ? 'docusaurus-classic-dark' : 'docusaurus-classic-light'});

			return () => {
				instance?.dispose()
			}
		}, [src, rest, colorMode, player] // executed every time the array items change
	);

	return <div ref={ref}/>;
};

export default AsciinemaPlayer;