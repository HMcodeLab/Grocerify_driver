import React from 'react'

export default function Deliveryboyheader({ info }) {
	return (
		<div>
			<div className="flex flex-col items-center gap-1 pt-4">
				<img
					src={info?.profile}
					className="w-[70px] h-[70px] object-contain"
				></img>
				<p className="text-[#303030] text-[16px] font-Montserrat font-bold">
					{info?.firstName} {info?.lastName}
				</p>
				<p className="text-[#303030] text-[16px] font-Montserrat">
					Shift status:{' '}
					<span className="text-[#06B178]">Active</span>
					{/* {info?.shift_status ? (
					) : (
						<span className="text-[#ff5858]">Inactive</span>
					)} */}
				</p>
			</div>
		</div>
	)
}
