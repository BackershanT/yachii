// import React, { Suspense, lazy } from 'react';
// import MissionSection from '../components/MissionSection';
// import ObjectivesSection from '../components/ObjectivesSection';
// // import ImageSlider from '../components/ImageSlider';
// const VideoBanner = lazy(() => import('../components/VideoBanner'));
// const ImageSlider = lazy(() => import('../components/ImageSlider'));
// const ProductFeature = lazy(() => import('../components/ProductFeature'));
// const CareerSection = lazy(() => import('../components/CareerSection'));
// const SubscribeForm = lazy(() => import('../components/SubscribeForm'));
// const ContactSection = lazy(() => import('../components/ContactSection'));

// const Home = () => {
//     return (
//         <>
//             <Suspense fallback={<div>Loading...</div>}>
//                 {/* <VideoBanner /> */}
//                 < ImageSlider />
//                 <div className="min-h-screen bg-gray-50 p-8">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-8">Welcome to Our Platform</h2>
//           <p className="text-lg text-gray-600 text-center">
//             This is where your other components like MissionSection, ObjectivesSection, 
//             ProductFeature, CareerSection, etc. would go.
//           </p>
//         </div>
//       </div>
//             </Suspense>
//             <MissionSection />
//             <ObjectivesSection />
//             <Suspense fallback={<div>Loading...</div>}>
//                 <ProductFeature
//                     title="YChat"
//                     image="/images/ychat.jpg"
//                     readMore={
//                         <>
//                             <p className='text-muted'>YChat is redefining online shopping through collaboration, real-time interaction, and intelligent assistance. It empowers users to shop together via social features like screen sharing, live sessions, and AI-powered assistants, enabling shared decision-making and synchronized checkouts through messaging, voice, or video calls. YChat develops and maintains proprietary e-commerce software designed for immersive, group-driven experiences. It also supports merchants through app-in-app integrations, offering a unified hub where users can discover multiple mini-apps and complete purchases seamlessly—without ever leaving the YChat environment.</p>

//                             <p className='text-muted'>By harnessing the power of innovation, we are helping people not just stay connected, but experience a constant sense of togetherness, no matter where they are.</p>

//                             <p className='text-muted'>Stay tuned—<span className='fst-italic'><strong>Launching Soon!</strong></span> </p>
//                         </>
//                     }
//                 />
//                 <CareerSection />
//                 <SubscribeForm />
//                 <ContactSection />
//             </Suspense>
//         </>
//     );
// };
// export default Home;


import React, { Suspense, lazy } from 'react';
import MissionSection from '../components/MissionSection/MissionSection';
import ObjectivesSection from '../components/ObjectivesSection';

// Lazy loaded components
const ImageSlider = lazy(() => import('../components/ImageSlider/ImageSlider'));
const ProductFeature = lazy(() => import('../components/ProductFeature'));
const CareerSection = lazy(() => import('../components/CareerSection'));
const SubscribeForm = lazy(() => import('../components/SubscribeForm'));
const ContactSection = lazy(() => import('../components/ContactSection'));

const Home = () => {
    return (
        <>
            {/* Image Slider Section - Hero Banner */}
            <Suspense fallback={
                <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <div className="text-xl text-gray-700">Loading slider...</div>
                    </div>
                </div>
            }>
                <ImageSlider />
            </Suspense>

            {/* Main Content Sections - These load immediately */}
            <MissionSection />
            <ObjectivesSection />

            {/* Other Lazy Loaded Components */}
            <Suspense fallback={
                <div className="w-full p-8 text-center bg-gray-50">
                    <div className="max-w-2xl mx-auto">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-200 rounded mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </div>
                        <div className="text-lg text-gray-600 mt-4">Loading content...</div>
                    </div>
                </div>
            }>
                {/* Product 1 */}
                <ProductFeature
                    title="YChat"
                    image="/images/ychat.jpg"
                    readMore={
                        <>
                            <p className='text-muted'>
                                YChat is redefining online shopping through collaboration, real-time interaction, and intelligent assistance.
                            
                                By harnessing the power of innovation, we are helping people not just stay connected, but experience a constant
                                sense of togetherness, no matter where they are.
                            </p>
                            <p className='text-muted'>
                                Stay tuned—<span className='fst-italic'><strong>Launching Soon!</strong></span>
                            </p>
                        </>
                    }
                />
                {/* Product 2 */}

                {/* <CareerSection /> */}
                <SubscribeForm />
                <ContactSection />
            </Suspense>
        </>
    );
};

export default Home;