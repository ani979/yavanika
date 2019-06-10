import React from 'react'
import * as Icon from 'react-feather';

const BoxArea = (props) => {
    return (
        <section className="boxes-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="single-box">
							<div className="icon">
                                <Icon.Server />
							</div>
							<h3>Website development</h3>
							<p>We development webiste which is for the people and by the people.Why not make work simple.</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-f78acb">
							<div className="icon">
                                <Icon.Code />
							</div>
							<h3>UX Design</h3>
							<p>We design things which will define you and your work.State your taste and we promise to serve the receipe right.</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-c679e3">
							<div className="icon">
                                <Icon.Users />
							</div>
							<h3>Branding</h3>
							<p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-eb6b3d">
							<div className="icon">
                                <Icon.GitBranch />
							</div>
							<h3>SEO and Deployment</h3>
							<p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default BoxArea
