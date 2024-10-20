const Footer = () => {
  return (
    <section className="bg-black flex justify-center pb-10 box-border">
      <div className="w-full max-w-[1200px] mx-10 box-border">
        <div className="box-border">
          <div
            className="flex flex-col items-center pt-20 pb-20 box-border bg-[#141414] border border-[#2B2B2B] rounded-[24px] px-10"
            style={{
              backgroundImage:
                'url("https://assets.website-files.com/64b4320d9bd69e8f6cf59f6e/64babdc64399fe8d84fb53ca_Star%204%20(1).svg"), url("https://assets.website-files.com/64b4320d9bd69e8f6cf59f6e/64babe3715ab388c62f75cb4_Star%203.svg")',
              backgroundPosition: "92% 65%, 20% 10%",
              backgroundRepeat: "no-repeat, no-repeat",
              backgroundSize: "auto, auto",
            }}>
            <div className="w-full max-w-[557px] text-center mb-5 box-border">
              <h2
                className="text-[56px] leading-[64px] text-transparent bg-clip-text pb-[5px] mt-0 mb-0 tracking-[-1.28px] font-medium"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.15))",
                  fontFamily: '"Generalsans Medium", sans-serif',
                }}>
                Your next design destination is here
              </h2>
            </div>
            <div className="w-full max-w-[467px] text-center text-[16px] leading-[24px] text-[#7D7D7D] font-regular box-border">
              Get ready to embark on a journey where imagination meets
              precision, and where design dreams become a vivid reality.
            </div>
            <div className="flex flex-wrap justify-center gap-[32px] mt-10 box-border">
              <div className="flex-none items-center box-border">
                <a
                  href="https://www.facebook.com/webflow"
                  target="_blank"
                  className="block box-border bg-transparent">
                  <div className="flex justify-center items-center gap-[14px] border border-[#2B2B2B] rounded-[60px] py-1 px-[25px] box-border bg-[#141414]">
                    <img
                      src="https://cdn.prod.website-files.com/64b4320d9bd69e8f6cf59f6e/64babac4fa301432a94396e1_Group%20427319611%20(1).svg"
                      alt="Social Icon"
                      className="w-[32px] h-[32px]"
                    />
                    <div className="text-[14px] leading-[18px] text-white font-regular">
                      Facebook
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex-none items-center box-border">
                <a
                  href="https://www.twitter.com/webflow"
                  target="_blank"
                  className="block box-border bg-transparent">
                  <div className="flex justify-center items-center gap-[14px] border border-[#2B2B2B] rounded-[60px] py-1 px-[25px] box-border bg-[#141414]">
                    <img
                      src="https://cdn.prod.website-files.com/64b4320d9bd69e8f6cf59f6e/64babac4e0ab4812a5ce6276_Group%20427319388.svg"
                      alt="Social Icon"
                      className="w-[32px] h-[32px]"
                    />
                    <div className="text-[14px] leading-[18px] text-white font-regular">
                      Twitter
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex-none items-center box-border">
                <a
                  href="https://dribbble.com/webflow"
                  target="_blank"
                  className="block box-border bg-transparent">
                  <div className="flex justify-center items-center gap-[14px] border border-[#2B2B2B] rounded-[60px] py-1 px-[25px] box-border bg-[#141414]">
                    <img
                      src="https://cdn.prod.website-files.com/64b4320d9bd69e8f6cf59f6e/64babac4e87542d1cfc4d851_Group%20427319613%20(1).svg"
                      alt="Social Icon"
                      className="w-[32px] h-[32px]"
                    />
                    <div className="text-[14px] leading-[18px] text-white font-regular">
                      Dribbble
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex-none items-center box-border">
                <a
                  href="https://www.instagram.com/webflow/"
                  target="_blank"
                  className="block box-border bg-transparent">
                  <div className="flex justify-center items-center gap-[14px] border border-[#2B2B2B] rounded-[60px] py-1 px-[25px] box-border bg-[#141414]">
                    <img
                      src="https://cdn.prod.website-files.com/64b4320d9bd69e8f6cf59f6e/64babac429a57a8dd25041a6_Group%20427319614.svg"
                      alt="Social Icon"
                      className="w-[32px] h-[32px]"
                    />
                    <div className="text-[14px] leading-[18px] text-white font-regular">
                      Instagram
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center box-border">
            <a href="/contact-us" className="block box-border bg-transparent">
              <div className="text-[16px] leading-[24px] text-white font-regular px-6 py-4 rounded-[60px] border border-[#444444] bg-gradient-to-r from-[#141414] to-transparent">
                Get in contact me
              </div>
            </a>
          </div>
          <div className="flex flex-col items-center justify-between mt-10 gap-[20px] box-border">
            <div className="text-[16px] leading-[24px] text-white font-regular">
              © All rights reserved by
              <a
                href="https://basecom.webflow.io/"
                className="text-white font-medium">
                {" "}
                Basecom
              </a>
              . Powered by
              <a href="https://webflow.com/" className="text-white font-medium">
                {" "}
                Webflow
              </a>
              .
            </div>
            <div className="flex gap-[32px] box-border">
              <a
                href="/rreference/changelog"
                className="text-white font-regular text-[16px] leading-[24px]">
                Changelog
              </a>
              <a
                href="/rreference/license"
                className="text-white font-regular text-[16px] leading-[24px]">
                Licenses
              </a>
              <a
                href="/rreference/style-guide"
                className="text-white font-regular text-[16px] leading-[24px]">
                Style Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

/*
<section style={{justifyContent: 'center', paddingBottom: '40px', display: 'flex', boxSizing: 'border-box'}}>
            <div style={{width: '100%', maxWidth: '1200px', marginLeft: '40px', marginRight: '40px', boxSizing: 'border-box'}}>
                <div style={{boxSizing: 'border-box'}}>
                    <div data-w-id="e2cee14a-9a1d-8807-ec10-e474fab69df5" style={{transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1, paddingTop: '80px', paddingBottom: '80px', backgroundImage: 'url("https://assets.website-files.com/64b4320d9bd69e8f6cf59f6e/64babdc64399fe8d84fb53ca_Star%204%20(1).svg"), url("https://assets.website-files.com/64b4320d9bd69e8f6cf59f6e/64babe3715ab388c62f75cb4_Star%203.svg")', backgroundPosition: '92% 65%, 20% 10%', backgroundRepeat: 'no-repeat, no-repeat', backgroundSize: 'auto, auto', border: '0.925926px solid rgb(43, 43, 43)', borderRadius: '24px', flexDirection: 'column', alignItems: 'center', padding: '80px 40px', display: 'flex', backgroundColor: 'rgb(20, 20, 20)', boxSizing: 'border-box'}}>
                        <div style={{width: '100%', maxWidth: '557px', textAlign: 'center', marginBottom: '19px', boxSizing: 'border-box'}}>
                            <h2 style={{fontSize: '56px', lineHeight: '64px', WebkitTextFillColor: 'rgba(0, 0, 0, 0)', backgroundImage: 'radial-gradient(circle, rgb(255, 255, 255), rgba(255, 255, 255, 0.15))', WebkitBackgroundClip: 'text', paddingBottom: '5px', marginTop: '0px', marginBottom: '0px', letterSpacing: '-1.28px', fontFamily: '"Generalsans Medium", sans-serif', fontWeight: 500, boxSizing: 'border-box'}}>Your next design destination is here</h2>
                        </div>
                        <div style={{width: '100%', maxWidth: '467px', textAlign: 'center', fontFamily: '"Generalsans Regular", sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '24px', color: 'rgb(125, 125, 125)', boxSizing: 'border-box'}}>Get ready to embark on a journey where imagination meets precision, and where design dreams become a vivid reality.</div>
                        <div style={{flexWrap: 'wrap', justifyContent: 'center', gap: '32px', marginTop: '40px', display: 'flex', boxSizing: 'border-box'}}>
                            <div style={{flex: '0 0 auto', alignItems: 'center', boxSizing: 'border-box'}}><a href="https://www.facebook.com/webflow" target="_blank" style={{textDecoration: 'none solid rgb(0, 0, 238)', maxWidth: '100%', display: 'inline-block', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                                    <div data-w-id="e2cee14a-9a1d-8807-ec10-e474fab69dfd" style={{opacity: 1, width: '100%', gap: '14px', border: '0.925926px solid rgb(43, 43, 43)', borderRadius: '60px', justifyContent: 'center', alignItems: 'center', padding: '4px 25px 4px 4px', display: 'flex', backgroundColor: 'rgb(20, 20, 20)', boxSizing: 'border-box'}}><img src="https://cdn.prod.website-files.com/64b4320d9bd69e8f6cf59f6e/64babac4fa301432a94396e1_Group%20427319611%20(1).svg" loading="lazy" alt="Social Icon" style={{width: '32px', height: '31.9951px', maxWidth: '100%', verticalAlign: 'middle', display: 'block', boxSizing: 'border-box', border: '0px none rgb(0, 0, 238)'}} />
                                        <div style={{fontFamily: '"Generalsans Regular", sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '18px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>Facebook</div>
                                    </div>
                                </a></div>
                            <div style={{flex: '0 0 auto', alignItems: 'center', boxSizing: 'border-box'}}><a href="https://www.twitter.com/webflow" target="_blank" style={{textDecoration: 'none solid rgb(0, 0, 238)', maxWidth: '100%', display: 'inline-block', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                                    <div data-w-id="e2cee14a-9a1d-8807-ec10-e474fab69e02" style={{opacity: 1, width: '100%', gap: '14px', border: '0.925926px solid rgb(43, 43, 43)', borderRadius: '60px', justifyContent: 'center', alignItems: 'center', padding: '4px 25px 4px 4px', display: 'flex', backgroundColor: 'rgb(20, 20, 20)', boxSizing: 'border-box'}}><img src="https://cdn.prod.website-files.com/64b4320d9bd69e8f6cf59f6e/64babac4e0ab4812a5ce6276_Group%20427319388.svg" loading="lazy" alt="Social Icon" style={{width: '32px', height: '31.9951px', maxWidth: '100%', verticalAlign: 'middle', display: 'block', boxSizing: 'border-box', border: '0px none rgb(0, 0, 238)'}} />
                                        <div style={{fontFamily: '"Generalsans Regular", sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '18px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>Twitter</div>
                                    </div>
                                </a></div>
                            <div style={{flex: '0 0 auto', alignItems: 'center', boxSizing: 'border-box'}}><a href="https://dribbble.com/webflow" target="_blank" style={{textDecoration: 'none solid rgb(0, 0, 238)', maxWidth: '100%', display: 'inline-block', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                                    <div data-w-id="e2cee14a-9a1d-8807-ec10-e474fab69e07" style={{opacity: 1, width: '100%', gap: '14px', border: '0.925926px solid rgb(43, 43, 43)', borderRadius: '60px', justifyContent: 'center', alignItems: 'center', padding: '4px 25px 4px 4px', display: 'flex', backgroundColor: 'rgb(20, 20, 20)', boxSizing: 'border-box'}}><img src="https://cdn.prod.website-files.com/64b4320d9bd69e8f6cf59f6e/64babac4e87542d1cfc4d851_Group%20427319613%20(1).svg" loading="lazy" alt="Social Icon" style={{width: '32px', height: '31.9951px', maxWidth: '100%', verticalAlign: 'middle', display: 'block', boxSizing: 'border-box', border: '0px none rgb(0, 0, 238)'}} />
                                        <div style={{fontFamily: '"Generalsans Regular", sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '18px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>Dribbble</div>
                                    </div>
                                </a></div>
                            <div style={{flex: '0 0 auto', alignItems: 'center', boxSizing: 'border-box'}}><a href="https://www.instagram.com/webflow/" target="_blank" style={{textDecoration: 'none solid rgb(0, 0, 238)', maxWidth: '100%', display: 'inline-block', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                                    <div data-w-id="e2cee14a-9a1d-8807-ec10-e474fab69e0c" style={{opacity: 1, width: '100%', gap: '14px', border: '0.925926px solid rgb(43, 43, 43)', borderRadius: '60px', justifyContent: 'center', alignItems: 'center', padding: '4px 25px 4px 4px', display: 'flex', backgroundColor: 'rgb(20, 20, 20)', boxSizing: 'border-box'}}><img src="https://cdn.prod.website-files.com/64b4320d9bd69e8f6cf59f6e/64babac429a57a8dd25041a6_Group%20427319614.svg" loading="lazy" alt="Social Icon" style={{width: '32px', height: '31.9951px', maxWidth: '100%', verticalAlign: 'middle', display: 'block', boxSizing: 'border-box', border: '0px none rgb(0, 0, 238)'}} />
                                        <div style={{fontFamily: '"Generalsans Regular", sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '18px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>Instagram</div>
                                    </div>
                                </a></div>
                        </div>
                    </div>
                    <div data-w-id="e2cee14a-9a1d-8807-ec10-e474fab69e10" style={{transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1, marginTop: '24px', boxSizing: 'border-box'}}><a href="/contact-us" style={{display: 'block', textDecoration: 'none solid rgb(0, 0, 238)', maxWidth: '100%', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                            <div data-w-id="7b60aca3-5099-9d10-985b-9cb89988a76b" style={{opacity: 1, width: '100%', maxWidth: '1200px', textAlign: 'center', backgroundImage: 'linear-gradient(to right, rgb(20, 20, 20), rgba(0, 0, 0, 0))', border: '0.925926px solid rgb(68, 68, 68)', borderRadius: '60px', padding: '22px 24px', display: 'block', fontFamily: '"Generalsans Regular", sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '24px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>Get in contact me</div>
                        </a></div>
                    <div data-w-id="e2cee14a-9a1d-8807-ec10-e474fab69e12" style={{transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1, gap: '20px', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginTop: '40px', display: 'flex', boxSizing: 'border-box'}}>
                        <div style={{boxSizing: 'border-box'}}>
                            <div style={{fontFamily: '"Generalsans Regular", sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '24px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>© All rights reserved by <a href="https://basecom.webflow.io/" data-w-id="e2cee14a-9a1d-8807-ec10-e474fab69e16" style={{opacity: 1, textDecoration: 'none solid rgb(255, 255, 255)', fontFamily: '"Generalsans Medium", sans-serif', fontSize: '16px', fontWeight: 500, lineHeight: '24px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>Basecom</a>. Powered by <a href="https://webflow.com/" data-w-id="e2cee14a-9a1d-8807-ec10-e474fab69e19" style={{opacity: 1, textDecoration: 'none solid rgb(255, 255, 255)', fontFamily: '"Generalsans Medium", sans-serif', fontSize: '16px', fontWeight: 500, lineHeight: '24px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>Webflow</a>.</div>
                        </div>
                        <div style={{gap: '32px', display: 'flex', boxSizing: 'border-box'}}><a href="/rreference/changelog" data-w-id="e2cee14a-9a1d-8807-ec10-e474fab69e1d" style={{opacity: 1, textDecoration: 'none solid rgb(255, 255, 255)', fontFamily: '"Generalsans Regular", sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '24px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>Changelog</a><a href="/rreference/license" data-w-id="e2cee14a-9a1d-8807-ec10-e474fab69e1f" style={{opacity: 1, textDecoration: 'none solid rgb(255, 255, 255)', fontFamily: '"Generalsans Regular", sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '24px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>Licenses</a><a href="/rreference/style-guide" data-w-id="e2cee14a-9a1d-8807-ec10-e474fab69e21" style={{opacity: 1, textDecoration: 'none solid rgb(255, 255, 255)', fontFamily: '"Generalsans Regular", sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '24px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>Style Guide</a></div>
                    </div>
                </div>
            </div>
        </section>


give jsx code with taulwind css ( same design ) 


*/
