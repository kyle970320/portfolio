import { Typography } from "../shared/Typography";
import ContactCard from "../widgets/ContactCard";

export default function ContactSection() {
  const LogoLeft = "/logo_white.png";
  const LogoRight = "/logo_black.png";
  const descLeft = `Make
Creactive
Website
  `;
  const email = "park970320@gamil.com";
  const Mobile = "010-3236-9583";
  const link = "https://github.com/kyle970320";

  return (
    <div id={"contact_section"} className="max-w-200 px-6 mt-60 mx-auto pb-60">
      <div className="text-center mb-2">
        <Typography className="text-3xl text-center font-gmarket text-white font-bold">
          감사합니다
        </Typography>
      </div>
      <div className="text-center mb-10">
        <Typography className="text-2xl text-gray-300 font-gmarket">
          여기로 연락주세요!
        </Typography>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 sm:flex-row">
        <ContactCard
          spotlightColor="rgba(255, 255, 255, 0.5)"
          className="flex flex-col justify-between w-55 aspect-5/9 bg-black border-black card-shadow-white"
        >
          <div className="text-xs font-gmarket">
            <Typography className="text-xs text-white font-gmarket whitespace-pre-line font-bold">
              {descLeft}
            </Typography>
          </div>
          <img
            src={LogoLeft}
            alt="logo"
            className="w-15 h-15 rounded-xl mix-blend-exclusion"
            style={{
              objectFit: "contain",
            }}
          />
        </ContactCard>
        <ContactCard className="flex flex-col justify-between w-55 aspect-5/9">
          <img
            src={LogoRight}
            alt="logo"
            className="w-15 h-15 rounded-xl bg-main"
            style={{
              objectFit: "contain",
            }}
          />
          <Typography className="text-black font-bold">박민규</Typography>
          <div>
            {email && (
              <div className="cursor-pointer text-gray-800 text-[10px]">
                <span className="inline-block mr-2 font-bold text-[13px] w-[28%]">
                  Email
                </span>
                <Typography className="text-gray-800 text-[10px]">
                  {email}
                </Typography>
              </div>
            )}
            {Mobile && (
              <div className="cursor-pointer text-gray-800 text-[10px]">
                <span className="inline-block mr-2 font-bold text-[13px] w-[28%]">
                  Mobile
                </span>
                <Typography className="text-gray-800 text-[10px]">
                  {Mobile}
                </Typography>
              </div>
            )}
            {link && (
              <p className=" text-gray-800 text-[10px] break-all">
                <span className="inline-block mr-2 font-bold text-[13px] w-[28%]">
                  Link
                </span>
                <a className="inline-block" target="_blank" href={link ?? ""}>
                  {link}
                </a>
              </p>
            )}
          </div>
        </ContactCard>
      </div>
    </div>
  );
}
