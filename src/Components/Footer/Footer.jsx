const Footer = () => {
  return (
    <section className=" flex justify-center pb-2 box-border">
      <div className="w-full max-w-[1200px] box-border">
        <div className="box-border">
          <div
            className="flex flex-col items-center pt-20 pb-20 box-border bg-[#141414] border border-[#2B2B2B] rounded-[24px] px-10"
            style={{
              backgroundImage:
                'url("https://assets.website-files.com/64b4320d9bd69e8f6cf59f6e/64babdc64399fe8d84fb53ca_Star%204%20(1).svg"), url("https://assets.website-files.com/64b4320d9bd69e8f6cf59f6e/64babe3715ab388c62f75cb4_Star%203.svg")',
              backgroundPosition: "92% 65%, 20% 10%",
              backgroundRepeat: "no-repeat, no-repeat",
              backgroundSize: "auto, auto",
            }}
          >
            {/* New Queries Section */}
            <div className="w-full max-w-[557px] text-center mb-5 box-border">
              <h2 className="text-[56px] leading-[64px] text-white font-medium">
                Have Queries?
              </h2>
            </div>
            <div className="w-full max-w-[467px] text-center text-[16px] leading-[24px] text-[#7D7D7D] font-regular box-border mb-10">
              Have queries regarding our event? Leave us a mail at{" "}
              <a
                href="mailto:tedxlnmiit24@gmail.com"
                className="text-[#ffffff] underline"
              >
                tedxlnmiit24@gmail.com
              </a>{" "}
              or give us a call on the following numbers.
            </div>

            <div className="flex flex-wrap justify-center gap-[32px] mt-10 box-border">
              {[
                {
                  href: "https://wa.me/9328947223",
                  src: "https://www.tedxmec.in/assets/greywhatsapp-32.png",
                  text: "WhatsApp",
                  alt: "WhatsApp Icon",
                },
                {
                  href: "https://www.linkedin.com/company/tedxlnmiit/",
                  src: "https://cdn.prod.website-files.com/64b4320d9bd69e8f6cf59f6e/64babac4e0ab4812a5ce6276_Group%20427319388.svg",
                  text: "LinkedIn",
                  alt: "LinkedIn Icon",
                },
                {
                  href: "https://www.instagram.com/tedxlnmiit/",
                  src: "https://cdn.prod.website-files.com/64b4320d9bd69e8f6cf59f6e/64babac429a57a8dd25041a6_Group%20427319614.svg",
                  text: "Instagram",
                  alt: "Instagram Icon",
                },
              ].map(({ href, src, text, alt }) => (
                <div className="flex-none items-center box-border" key={text}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block box-border bg-transparent"
                  >
                    <div className="flex justify-between items-center gap-[20px] border border-[#2B2B2B] rounded-[60px] py-1 px-[10px] box-border bg-customDark">
                      <img src={src} alt={alt} className="w-[32px] h-[32px]" />
                      <div className="text-[14px] leading-[18px] text-white font-regular">
                        {text}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
