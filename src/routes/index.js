import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Main'
import Home from '../components/Home/Main'
import AboutUs from '../components/AboutUs/Main'
import Testimonial from '../components/Testimonial/Main'
import Contact from '../components/Contact/Main'
import ServiceList1 from '../components/ServiceList1/Main'
import ServiceList2 from '../components/ServiceList2/Main'
import ServiceDetail from '../components/ServiceDetails/Main'
import BlogList from '../components/BlogList/Main'
import SingleBlog from '../components/SingleBlog/Main'
import PagesPricing from '../components/PagesPricing/Main'
import SignIn from '../components/SignIn/Main'
import SignUp from '../components/SignUp/Main'
import FAQ from '../components/FAQ/Main'
import Error404 from '../components/Error404/Main'
import Advertisement from '../components/Page/Advertisement';
import Adformats from '../components/Page/Adformats';
import Brandsafety from '../components/Page/Brandsafety';
import Publishers from '../components/Page/Publishers';

function Index() {
  const location = useLocation();
  const path = location.pathname
  useEffect(() => {
    window.scroll(0, 0)
  }, [path]); const [FooterShow, setfooterShow] = useState(false)
  useEffect(() => {
    if (path === "/signin" || path === "/signup" || path === "/error") {
      setfooterShow(true)
    } else {
      setfooterShow(false)
    }
    window.scroll(0, 0)
  }, [path]);


  return (
    <>

      <div className="page_wrapper">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/advertisement" element={<Advertisement />} />
          <Route path="/Ad-formats" element={<Adformats/>} />
          <Route path="/brandsafety" element={<Brandsafety/>} />
          <Route path="/publishers" element={<Publishers/>} />


          
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/servicelist1" element={<ServiceList1 />} />
          <Route path="/servicelist2" element={<ServiceList2 />} />
          <Route path="/serviceDetail" element={<ServiceDetail />} />
          <Route path="/bloglist" element={<BlogList />} />
          <Route path="/singleblog" element={<SingleBlog />} />
          <Route path="/pricing" element={<PagesPricing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/error" element={<Error404 />} />
        </Routes>
        {!FooterShow && <Footer />}
      </div>
      

    </>
  )
}

export default Index