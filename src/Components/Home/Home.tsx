import Header from "./Header/Header";
import Slide from "./Slide/Slide";
import "./Home.scss";

function Home() {
    return <>
        <Header />
        <Slide />
        <main>
					<div className="popular-courses">
						<div className="title">
							<div className="text">
								<h1>explore featured courses</h1>
								<p>10,000+ unique online course list designs</p>
							</div>
							<ul className="categories">
								<li><a href="#">All</a></li>
								<li><a href="#" className="active">Trending</a></li>
								<li><a href="#">Popular</a></li>
								<li><a href="#">Featured</a></li>
							</ul>
						</div>
						<div className="courses">
							<button className="left"></button>
							<div className="list"></div>
							<button className="right"></button>
						</div>
					</div>
				</main>
    </>
}

export default Home;