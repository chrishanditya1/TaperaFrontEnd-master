import Layout from '../components/layout';
import 'isomorphic-fetch';
import Link from 'next/link';
import CardList from '../components/cardlist';
import { withAuthSync } from "../utils/authmenuutama";



class Homepage extends React.Component {
    static async getInitialProps() {
        const response = await fetch('http://10.172.24.130/event')
        const eventnewslist = await response.json()
        return { eventnewslist: eventnewslist }
    }
    render() {
        return (
            <Layout>
                <div>
                    {this.props.eventnewslist.length ?
                     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>

                     <ol className="carousel-indicators">
                         {this.props.eventnewslist.map((eventnews, index)=>(
                             <li key={eventnews.id} data-target="#carouselExampleIndicators" data-slide-to={index== 0 ? 0  : index} 
                             className={index==0 ? "active" : ""}></li>
                         ))}
                     </ol>
                     <div className="carousel-inner" role="listbox">
                         {this.props.eventnewslist.map((eventnews, index)=>(
                             <div key={eventnews.id} className={index==0 ? "carousel-item active" : "carousel-item "}>
                             <Link as={`/eventnews/${eventnews.id}`} href="/[eventnews]/[detaileventnews]">
                                 <img className="d-block img-fluid" src={`/assets/img/${eventnews.url}`} alt="First slide" />
                             </Link>
                         </div>
                         ))}
                     </div>
                     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span className="sr-only">Previous</span>
                     </a>
                     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
                         <span className="sr-only">Next</span>
                     </a>
                 </div> :
                 'Maaf Terjadi Kesalahan'
                 }  
                </div>
                <CardList />
            </Layout>
        )
    }
};

// const Profile = props => {
//     Homepage
// }

// Profile.getInitialProps = async ctx => {
//     const { token } = nextCookie(ctx);
//     // const apiUrl = getHost(ctx.req) + "/api/profile";

//     const redirectOnError = () =>
//         typeof window !== "undefined"
//         ? Router.push("/login")
//         : ctx.res.writeHead(302, { Location: "/login" }).end();

//     try {
//         const response = await fetch('http://10.172.24.130/login', {
//         credentials: "include",
//         body: {
//             Authorization: JSON.stringify({ token })
//         }
//         });
//         console.log(response);
//         if (response.ok) {
//         const js = await response.json();
//         console.log("js", js);
//         return js;
//         } else {
            
//         return await redirectOnError();
//         }
//     } catch (error) {
        
//         return redirectOnError();
//     }
// };

export default withAuthSync(Homepage);
//export default Homepage