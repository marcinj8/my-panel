import gsap from 'gsap';

export const onModalShow = (element: HTMLDivElement, duration?: number) => {
  const tl = gsap.timeline();
  tl.set(element, { display: 'block' });
  tl.to(element, {
    y: 0,
    duration: duration || 0.2,
    opacity: 1,
    ease: 'circ.inOut',
  });
};

export const onModalHide = (element: HTMLDivElement, duration?: number) => {
  const tl = gsap.timeline();
  tl.to(element, {
    y: '-200',
    duration: duration || 0.2,
    opacity: 0,
    ease: 'circ.inOut',
  });
  tl.set(element, { display: 'none' }, `+=${duration || 0.2}`);
};
