import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeXmark } from '@fortawesome/free-solid-svg-icons'
import { faArrowsMaximize } from '@fortawesome/free-solid-svg-icons'

const HomePageMBVideoPlayer = ({ data }) => {
	const video = useRef()
	const [videoMuted, setVideoMuted] = useState(false)
	const [videoFullScreen, setVideoFullScreen] = useState(false)

	let structure = {
		video: {
			src: 'http://techslides.com/demos/sample-videos/small.mp4'
		}
	}

	return (
		<section>
			<div className='home-page-mb-video-player px-6 px-md-12 py-6'>
				<div className='video-container'>
					<video
						ref={video}
						width='100%'
						height='100%'
						//  autoPlay={true}
					>
						<source src={structure?.video?.src} type={structure?.video?.type} />
						Your browser does not support the video tag.
					</video>
					<div className='control-buttons'>
						<button
							className='n-btn white rounded'
							onClick={() =>
								setVideoFullScreen(videoFullScreen => !videoFullScreen)
							}>
							<FontAwesomeIcon
								icon={faArrowsMaximize}
								size={'xl'}
								color={'text-primary-dark'}
							/>
						</button>
						<button
							className='n-btn white rounded'
							onClick={() => setVideoMuted(videoMuted => !videoMuted)}>
							<FontAwesomeIcon
								icon={faVolumeXmark}
								size={'xl'}
								color={'text-primary-dark'}
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomePageMBVideoPlayer
