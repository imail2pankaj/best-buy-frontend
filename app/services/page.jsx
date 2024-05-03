import React from 'react'

const Contact = () => {
	return (
		<section className="section about border-top border-bottom">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 mb-5">
						<h2 className="mb-2 ">Our Services.</h2>
						<p>Experience Reliable Computer Repair Services at Best Buy</p>
						<p>We understand the frustration of dealing with a malfunctioning computer. Whether it&apos;s a slow system, virus
							infection, hardware failure, or any other issue, our expert technicians are here to help.</p>
						<p>With years of experience in the field, our team possesses the expertise and technical know-how to diagnose
							and resolve a wide range of computer problems efficiently. We pride ourselves on our dedication to providing
							prompt and reliable service, ensuring that your computer is back up and running smoothly in no time.</p>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-4">
						<div className="service-item mb-5" data-aos="fade-left">
							<i className="ti ti-desktop"></i>
							<h4 className="my-3">Hardware Installation:</h4>
							<p>Whether you&apos;re upgrading your system or installing new components, our technicians can handle the
								installation process efficiently and correctly.</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="service-item mb-5" data-aos="fade-left" data-aos-delay="450">
							<i className="ti ti-target"></i>
							<h4 className="my-3">Diagnostic Services:</h4>
							<p>If you&apos;re experiencing hardware issues such as slow performance, overheating, or unusual noises, our
								diagnostic services can identify the root cause of the problem.</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="service-item mb-5 mb-lg-0" data-aos="fade-left" data-aos-delay="750">
							<i className="ti ti-settings"></i>
							<h4 className="my-3">Hardware Upgrades:</h4>
							<p>Looking to enhance the capabilities of your computer? We can recommend and install upgrades such as RAM,
								storage drives, graphics cards, and more to optimize performance.</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="service-item" data-aos="fade-left" data-aos-delay="750">
							<i className="ti ti-settings"></i>
							<h4 className="my-3">Hardware Repair:</h4>
							<p>From fixing malfunctioning components to replacing damaged parts, our technicians have the expertise to
								repair a wide range of hardware issues.</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="service-item mb-5" data-aos="fade-left" data-aos-delay="950">
							<i className="ti ti-settings"></i>
							<h4 className="my-3">Preventive Maintenance:</h4>
							<p>Regular maintenance is key to extending the lifespan of your hardware. Our preventive maintenance
								services include cleaning, dust removal, and component inspection to prevent potential issues.</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="service-item mb-5 mb-lg-0" data-aos="fade-left" data-aos-delay="1050">
							<i className="ti ti-layers-alt"></i>
							<h4 className="my-3">Custom computer:</h4>
							<p> Interested in building a custom computer tailored to your specific requirements? Our team can assist you
								in selecting the right components and assembling a system that meets your needs and budget.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact