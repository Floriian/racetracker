const loader = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-dark">
			<div className="relative w-20 h-20">
				<div className="absolute inset-0 bg-gradient-to-r from-lead-dark via-30% via-disabled-dark to-85% to-lead rounded-full animate-spin"></div>
        <div className="absolute inset-2 bg-dark rounded-full"></div>
			</div>
		</section>
  )
}

export default loader