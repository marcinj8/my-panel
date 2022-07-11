import gsap from 'gsap';

export const showSideMenu = (menu: HTMLElement) => {
  const tl = gsap.timeline();

  tl.addLabel('start')
    .to(
      menu,
      {
        duration: 0.3,
        opacity: 1,
        x: 0,
      },
    )
    .addLabel('end');
};

export const hideSideMenu = (menu: HTMLElement) => {
  const tl = gsap.timeline();

  tl.addLabel('start')
    .to(
      menu,
      {
        duration: 0.3,
        opacity: 0,
        x: '-100%',
      },
    )
    .addLabel('end');
};
