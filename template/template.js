export const logo_template = `
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
  />
  <style>
    .insta {
      display: grid;
      width: calc(var(--i) * 50px);
      height: calc(var(--i) * 50px);
      background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
      border-radius: 25%;
      place-items: center;
    }
    .fa-instagram {
      font-size: calc(var(--i) * 3rem);
      color: white;
    }
  </style>
  <div class="insta">
    <i class="fa-brands fa-instagram"></i>
  </div>
`;
