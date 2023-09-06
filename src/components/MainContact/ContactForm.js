import React from 'react'

function ContactForm() {
	return (
		<>
			<section className="contact_form_section">
				<div className="container">
					<div className="contact_inner">
						<div className="contact_form">
							<div className="section_title">
								<h2>Leave a <span>message</span></h2>
								<p>Fill up form below, our team will get back soon</p>
							</div>
							<form action="submit">
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input type="text" placeholder="Name" className="form-control" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input type="email" placeholder="Email" className="form-control" />
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input type="text" placeholder="Company Name" className="form-control" />
										</div>
									</div>

									<div className="col-md-6">
										<div className="form-group">
											<select className="form-control">
												<option value="">Country</option>
											</select>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input type="text" placeholder="Phone" className="form-control" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input type="text" placeholder="Website" className="form-control" />
										</div>
									</div>
								</div>

								<div className="form-group">
									<textarea className="form-control" placeholder="Your message"></textarea>
								</div>

								<div className="form-group term_check">
									<input type="checkbox" id="term" />
									<label htmlFor="term">I agree to receive emails, newsletters and promotional messages</label>
								</div>

								<div className="form-group ">
									<button className="btn btn_main" type="submit">SEND MESSAGE <i className="icofont-arrow-right"></i></button>
								</div>

							</form>

							<div className="form-graphic">
								<img src="assets/images/new/paperplane.png" alt="image" />
							</div>
						</div>


					</div>
				</div>
			</section>
		</>
	)
}

export default ContactForm
