import React from 'react'

export default function About() {
    return (
        <section className="about-area ptb-50">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="about-image">
							<img src={require("../../images/1.png")} alt="image" />
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="about-content">
							<div className="section-title">
								<h2>About Us</h2>
								<div className="bar"></div>
								<p>We are a team of industry etc</p>
							</div>
							<div>
								<h3>Our Story</h3>
								<p>When dreamers meet and sit together to fulfill one dream of thiers, great things happens.May be our story will be also like that</p>

							<p>We are</p>

							<p>Business-to-business metrics analytics value proposition funding angel investor entrepreneur alpha ramen equity gamification. Social proof partner network research.</p>
							</div>

							
						</div>
					</div>
				</div>

				<div className="about-inner-area">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="about-text">
								<h3>Our History</h3>
								<p>Lets meet to know each other more</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="about-text">
								<h3>Our Mission</h3>
								<p>Lets simply work and add art to it.</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
							<div className="about-text">
								<h3>Who we are</h3>
								<p>Simply put,We are a bunch of industry battered designers and expert coders</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}