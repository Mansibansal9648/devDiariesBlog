//Dependencies
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <section class="navbar_style text_style w-100 start-0 bottom-0 position-relative">
        <footer>
          <div class="border-bottom container">
            <div class="d-flex justify-content-between  row">
              <div class="mt-3 mb-1 col-md-3">
                <div class="row">
                  <NavLink className="navbar-brand" to="/">
                    DevDiaries
                  </NavLink>
                </div>
                <div class="row">
                  <p class="text-white pt-3 fs-6 ">
                    Welcome to devDiaries, your go-to platform for insightful blogs. We provide a space to learn, share,
                    and grow in the tech industry. Join our community, contribute your knowledge, and stay updated with
                    the latest technology.
                  </p>
                </div>
                <div class="row">
                  <div class="my-3 d-flex">
                    <a href="" class="me-1 border rounded-circle " title="facebook" target="_blank">
                      {/* add icon */}
                    </a>
                    <a
                      href="https://www.instagram.com/tech_superior_consulting/"
                      target="_blank"
                      rel="noreferrer"
                      class="mx-1 border rounded-circle "
                      title="instagram"
                    >
                     {/* add icon */}
                    </a>
                    <a
                      href="https://www.google.com/search?q=tech+superior+consulting&amp;rlz=1C1IMSH_enIN1044IN1044&amp;sxsrf=APwXEdfYT00Q89dQ8wb23OTXlvSAQ6tLiw%3A1684931940247&amp;ei=ZAVuZO_MDurb4-EPrf2ygAU&amp;ved=0ahUKEwjvjpPO_I3_AhXq7TgGHa2-DFAQ4dUDCA8&amp;uact=5&amp;oq=tech+superior+consulting&amp;gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzILCC4QgAQQxwEQrwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgYIABAWEB4yAggmMhkILhCABBDHARCvARCXBRDcBBDeBBDgBBgBOgQIABBHOgoIABBHENYEELADOgcIIxCKBRAnOgUIJhCLA0oECEEYAFDhB1izCmDIDWgBcAJ4AIABiQKIAbsDkgEFMC4xLjGYAQCgAQHIAQO4AQPAAQHaAQYIARABGBQ&amp;sclient=gws-wiz-serp"
                      target="_blank"
                      rel="noreferrer"
                      class="mx-1 border rounded-circle "
                      title="google"
                    >
                      
                    </a>
                    <a href="https://twitter.com" target="_blank" class="mx-2 border rounded-circle " title="twitter">
                      {/* Add icon */}
                    </a>
                    <a href="" rel="noreferrer" target="_blank" class="mx-1 border rounded-circle " title="linkedIn">
                      {/* add icon */}
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-3 mb-1  col-md-6">
                <div class="row">
                  <h4 class="text-center">Find Us</h4>
                </div>
                <div class="">
                  <div class="d-flex justify-content-between">
                    <div class="first-row">
                      <h6 class="location-tsc">Head Office - Gurugram</h6>
                      <p class="mt-2 para-margin para-font text-white" role="button">
                        <span class="me-1">
                          {/* add icon */}
                        </span>
                        812 P, Sector 47, <span class="para-font footer_socialPin__U4Z5t">Gurugram </span>
                        <p class="para-font ms-4 footer_locationDelhi__X3Gus">Haryana 122018</p>
                      </p>
                      <p class="my-0 text-white footer_socialContect__CmosY" role="button">
                        <span class="me-1"></span>
                        <a href="" class="text-white text-decoration-none">
                          blogs@devDiaries.com
                        </a>
                      </p>
                      <p class="my-0 text-white" role="button">
                        <span class="me-1">{/* Add icon */}</span>
                        <a href="" class="text-white text-decoration-none">
                          +91 9990839648
                        </a>
                      </p>
                      <p class="my-0 text-white">
                        <span class="me-1">{/* ADD ICON */}</span>
                        <a href="" class="text-white para-font text-decoration-none">
                          +91 9211139060
                        </a>
                      </p>
                      <p class="mt-0 text-white ">
                        {/* <span class="me-1">ADD Icon</span> */}
                        <a href="" class="text-white   text-decoration-none">
                          devDiaries@gmail.com
                        </a>
                      </p>
                    </div>

                    <div class="second-row">
                      <h6 class="location-tsc">Dehradun</h6>
                      <p class="mt-2 para-bottom para-font text-white" role="button">
                        <span class="me-1">
                          {/* add icon */}
                        </span>
                        308, 3rd Floor, Plot No. 21{' '}
                        <p class="ms-4 ">Chrysler Tech Centre, IT Park,</p>
                        <p class="ms-4 ">Sahastradhara Road, Dehradun</p>
                        <p class="ms-4 ">Uttarakhand - 248013</p>
                      </p>
                      <h6 class="location-delhi">Delhi</h6>
                      <p class="my-2 para-font text-white" role="button">
                        <span class="me-1">{/* add icon */}</span>
                        A-21, <span class="para-font ">Green Park Extension,</span>
                        <p class="para-font ms-4 ">New Delhi- 110016</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-3 mb-1 col-md-2">
                <div class="row">
                  <h4 class="">Useful Links</h4>
                  <div class="row">
                    <div class="mt-4 row">
                      <div class="my-2 useful-mobile " role="button">
                        About
                      </div>
                      <div class="my-2 useful-mobile " role="button">
                        Engagement
                      </div>
                      <div class="my-2 useful-mobile " role="button">
                        Careers
                      </div>
                      <div class="my-2 useful-mobile " role="button">
                        Contact Us
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-3 px-1 container">
            <div class="d-flex justify-content-between footer_copyrightDiv__RiDlE row">
              <div class="col-md-6">
                <small class="">
                  © Copyright : <b>dev Diaries Pvt Ltd</b>. All Rights Reserved
                </small>
              </div>
              <div class="d-flex justify-content-end   col-md-6">
                <div class="mx-2 " role="button">
                  Privacy Policy
                </div>
                <div class="mx-2 " role="button">
                  Terms &amp; Conditions
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
export default Footer;
