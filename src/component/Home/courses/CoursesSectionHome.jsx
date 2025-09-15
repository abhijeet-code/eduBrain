import React from 'react';
import CourseCard from './CourseCard';
import DecorativeVectors from './DecorativeVectors';

const CoursesSectionHome = () => {
  const courses = [
    {
      image: {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/3427d9bbfceb5b86d68d1d1d11dbebb3341ec001?width=572",
        isSpecial: false
      },
      icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 36px; height: 36px; margin-bottom: 16px">
        <path d="M34.875 27H4.5V5.625C4.5 5.00344 3.99656 4.5 3.375 4.5H1.125C0.503438 4.5 0 5.00344 0 5.625V29.25C0 30.4924 1.00758 31.5 2.25 31.5H34.875C35.4966 31.5 36 30.9966 36 30.375V28.125C36 27.5034 35.4966 27 34.875 27ZM32.625 6.75H24.3239C22.8206 6.75 22.0676 8.56758 23.1307 9.6307L25.4088 11.9088L20.25 17.0684L15.0912 11.9095C14.2123 11.0306 12.7877 11.0306 11.9095 11.9095L7.07977 16.7393C6.64031 17.1788 6.64031 17.891 7.07977 18.3305L8.67023 19.9209C9.10969 20.3604 9.82195 20.3604 10.2614 19.9209L13.5 16.6816L18.6588 21.8405C19.5377 22.7194 20.9623 22.7194 21.8405 21.8405L28.5905 15.0905L30.8686 17.3686C31.9317 18.4317 33.7493 17.6787 33.7493 16.1754V7.875C33.75 7.25344 33.2466 6.75 32.625 6.75Z" fill="black"></path>
      </svg>`,
      title: { text: "Power BI", isMultiLine: false },
      description: [
        "Comprehensive course on Power",
        "BI for data analysis and",
        "visualization"
      ],
      lectures: "76",
      duration: "10h 30m",
  originalPrice: "₹2999",
  discountedPrice: "₹2700",
  discount: "10% OFF"
    },
    {
      image: {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/d8c500523d95625c414b2769a6124c54c8e77d8a?width=572",
        isSpecial: false
      },
      icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 36px; height: 36px; margin-bottom: 16px">
        <path d="M34.875 27H4.5V5.625C4.5 5.00344 3.99656 4.5 3.375 4.5H1.125C0.503438 4.5 0 5.00344 0 5.625V29.25C0 30.4924 1.00758 31.5 2.25 31.5H34.875C35.4966 31.5 36 30.9966 36 30.375V28.125C36 27.5034 35.4966 27 34.875 27ZM32.625 6.75H24.3239C22.8206 6.75 22.0676 8.56758 23.1307 9.6307L25.4088 11.9088L20.25 17.0684L15.0912 11.9095C14.2123 11.0306 12.7877 11.0306 11.9095 11.9095L7.07977 16.7393C6.64031 17.1788 6.64031 17.891 7.07977 18.3305L8.67023 19.9209C9.10969 20.3604 9.82195 20.3604 10.2614 19.9209L13.5 16.6816L18.6588 21.8405C19.5377 22.7194 20.9623 22.7194 21.8405 21.8405L28.5905 15.0905L30.8686 17.3686C31.9317 18.4317 33.7493 17.6787 33.7493 16.1754V7.875C33.75 7.25344 33.2466 6.75 32.625 6.75Z" fill="black"></path>
      </svg>`,
      title: { text: "Data Analytics", isMultiLine: false },
      description: [
        "Comprehensive course covering",
        "Excel fundamentals to advanced",
        "data visualization techniques.",
        "Learn data management,",
        "analysis,..."
      ],
      lectures: "67",
      duration: "15h 43m",
  originalPrice: "₹2999",
  discountedPrice: "₹2700",
  discount: "10% OFF"
    },
    {
      image: {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/8640b6b21eb4910ec9ce9c96d48cd8182d207fcf?width=572",
        isSpecial: false
      },
      icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 36px; height: 36px; margin-bottom: 16px">
        <path d="M33.75 5.14287V8.35713C33.75 11.1897 26.6953 13.5 18 13.5C9.30466 13.5 2.25 11.1897 2.25 8.35713V5.14287C2.25 2.31026 9.30466 0 18 0C26.6953 0 33.75 2.31026 33.75 5.14287ZM33.75 12.375V19.6071C33.75 22.4397 26.6953 24.75 18 24.75C9.30466 24.75 2.25 22.4397 2.25 19.6071V12.375C5.63379 14.7054 11.8271 15.7902 18 15.7902C24.1729 15.7902 30.3661 14.7054 33.75 12.375ZM33.75 23.625V30.8571C33.75 33.6897 26.6953 36 18 36C9.30466 36 2.25 33.6897 2.25 30.8571V23.625C5.63379 25.9554 11.8271 27.0402 18 27.0402C24.1729 27.0402 30.3661 25.9554 33.75 23.625Z" fill="black"></path>
      </svg>`,
      title: { text: "Machine Learning", isMultiLine: false },
      description: [
        "Comprehensive course covering",
        "fundamentals of Machine",
        "Learning including supervised,",
        "unsupervised, semi-supervised",
        "learning, and reinforcement..."
      ],
      lectures: "80",
      duration: "13h 36m",
  originalPrice: "₹2999",
  discountedPrice: "₹2700",
  discount: "10% OFF"
    },
    {
      image: {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/315e4de77cbf9f7e7ff3602cf4a5ba61af1c6895?width=572",
        isSpecial: false
      },
      icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 36px; height: 36px; margin-bottom: 16px">
        <path d="M14.3454 18.3179C14.697 18.6695 15.2668 18.6695 15.6184 18.3179L16.2546 17.6817C16.6061 17.3302 16.6061 16.7603 16.2546 16.4088L14.2453 14.4001L16.254 12.3908C16.6056 12.0393 16.6056 11.4695 16.254 11.1179L15.6178 10.4817C15.2662 10.1302 14.6964 10.1302 14.3449 10.4817L11.0632 13.7633C10.7117 14.1149 10.7117 14.6847 11.0632 15.0363L14.3454 18.3179ZM19.746 17.6823L20.3822 18.3185C20.7337 18.67 21.3036 18.67 21.6551 18.3185L24.9368 15.0368C25.2883 14.6853 25.2883 14.1155 24.9368 13.7639L21.6551 10.4823C21.3036 10.1307 20.7337 10.1307 20.3822 10.4823L19.746 11.1185C19.3944 11.47 19.3944 12.0398 19.746 12.3914L21.7547 14.4001L19.746 16.4093C19.3944 16.7609 19.3944 17.3307 19.746 17.6823ZM35.1 27.0001H21.4616C21.42 28.1144 20.6342 28.8001 19.62 28.8001H16.2C15.1487 28.8001 14.3426 27.8174 14.3567 27.0001H0.9C0.405 27.0001 0 27.4051 0 27.9001V28.8001C0 30.7801 1.62 32.4001 3.6 32.4001H32.4C34.38 32.4001 36 30.7801 36 28.8001V27.9001C36 27.4051 35.595 27.0001 35.1 27.0001ZM32.4 6.3001C32.4 4.8151 31.185 3.6001 29.7 3.6001H6.3C4.815 3.6001 3.6 4.8151 3.6 6.3001V25.2001H32.4V6.3001ZM28.8 21.6001H7.2V7.2001H28.8V21.6001Z" fill="black"></path>
      </svg>`,
      title: {
        line1: "Full Stack",
        line2: "Development",
        isMultiLine: true
      },
      description: [
        "Learn to build complete web",
        "applications by mastering both",
        "front-end and back-end",
        "technologies like..."
      ],
      lectures: "84",
      duration: "15h 36m",
  originalPrice: "₹2999",
  discountedPrice: "₹2700",
  discount: "10% OFF"
    },
    {
      image: {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/cadbefd3d5e5fd10273f44002af99d10d52602ed?width=572",
        isSpecial: false
      },
      icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 36px; height: 36px; margin-bottom: 16px">
        <g clip-path="url(#clip0_396_1222)">
          <path d="M11.7433 21.7505C8.92238 21.9319 6.36231 23.0063 4.90965 26.8341C4.74441 27.2707 4.34715 27.5358 3.88379 27.5358C3.10262 27.5358 0.687383 25.5902 -0.000976562 25.1205C-0.000273438 30.9108 2.66668 36 8.99973 36C14.3336 36 17.9997 32.9224 17.9997 27.5491C17.9997 27.3305 17.954 27.1216 17.9315 26.9072L11.7433 21.7505ZM32.1951 0C31.1292 0 30.13 0.471797 29.3679 1.15664C14.9953 13.9957 13.4997 14.2973 13.4997 18.0766C13.4997 19.0399 13.7282 19.9582 14.1136 20.7977L18.6009 24.537C19.1079 24.6635 19.6303 24.75 20.1752 24.75C24.5423 24.75 27.0736 21.5529 35.0224 6.71766C35.5413 5.70867 35.9997 4.61883 35.9997 3.48398C35.9997 1.45125 34.1716 0 32.1951 0Z" fill="black"></path>
        </g>
        <defs>
          <clipPath id="clip0_396_1222">
            <rect width="36" height="36" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>`,
      title: { text: "UI/UX", isMultiLine: false },
      description: [
        "Learn the principles of designing",
        "intuitive and visually appealing",
        "digital products, including",
        "wireframing, prototyping,..."
      ],
      lectures: "32",
      duration: "6h 10m",
  originalPrice: "₹2999",
  discountedPrice: "₹2700",
  discount: "10% OFF"
    },
    {
      image: {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/d9e01b38d697e8bd2d345db8b9175d13559966bd?width=572",
        isSpecial: false
      },
      icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 36px; height: 36px; margin-bottom: 16px">
        <g clip-path="url(#clip0_396_1246)">
          <path d="M15.6886 32.3718L12.2573 31.3762C11.8973 31.275 11.6948 30.8981 11.7961 30.5381L19.4742 4.08933C19.5754 3.72933 19.9523 3.52683 20.3123 3.62808L23.7436 4.62371C24.1036 4.72496 24.3061 5.10183 24.2048 5.46183L16.5267 31.9106C16.4198 32.2706 16.0486 32.4787 15.6886 32.3718ZM9.27605 26.0606L11.7229 23.4506C11.9817 23.175 11.9648 22.7362 11.6779 22.4831L6.58168 18L11.6779 13.5168C11.9648 13.2637 11.9873 12.825 11.7229 12.5493L9.27605 9.93933C9.02293 9.66933 8.59543 9.65246 8.3198 9.91121L0.21418 17.505C-0.0726953 17.7693 -0.0726953 18.225 0.21418 18.4893L8.3198 26.0887C8.59543 26.3475 9.02293 26.3362 9.27605 26.0606ZM27.6811 26.0943L35.7867 18.495C36.0736 18.2306 36.0736 17.775 35.7867 17.5106L27.6811 9.90558C27.4111 9.65246 26.9836 9.66371 26.7248 9.93371L24.2779 12.5437C24.0192 12.8193 24.0361 13.2581 24.3229 13.5112L29.4192 18L24.3229 22.4831C24.0361 22.7362 24.0136 23.175 24.2779 23.4506L26.7248 26.0606C26.9779 26.3362 27.4054 26.3475 27.6811 26.0943Z" fill="black"></path>
        </g>
        <defs>
          <clipPath id="clip0_396_1246">
            <rect width="36" height="36" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>`,
      title: { text: "C++", isMultiLine: false },
      description: [
        "Master C++ programming with a",
        "focus on object-oriented",
        "concepts, memory management,",
        "and algorithm development..."
      ],
      lectures: "50",
      duration: "9h 10m",
  originalPrice: "₹2999",
  discountedPrice: "₹2700",
  discount: "10% OFF"
    },
    {
      image: {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/b673715d5a342cde324aa3f05461d17f01d7309c?width=572",
        isSpecial: false
      },
      icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 36px; height: 36px; margin-bottom: 16px">
        <g clip-path="url(#clip0_396_1271)">
          <path d="M15.6886 32.3718L12.2573 31.3762C11.8973 31.275 11.6948 30.8981 11.7961 30.5381L19.4742 4.08933C19.5754 3.72933 19.9523 3.52683 20.3123 3.62808L23.7436 4.62371C24.1036 4.72496 24.3061 5.10183 24.2048 5.46183L16.5267 31.9106C16.4198 32.2706 16.0486 32.4787 15.6886 32.3718ZM9.27605 26.0606L11.7229 23.4506C11.9817 23.175 11.9648 22.7362 11.6779 22.4831L6.58168 18L11.6779 13.5168C11.9648 13.2637 11.9873 12.825 11.7229 12.5493L9.27605 9.93933C9.02293 9.66933 8.59543 9.65246 8.3198 9.91121L0.21418 17.505C-0.0726953 17.7693 -0.0726953 18.225 0.21418 18.4893L8.3198 26.0887C8.59543 26.3475 9.02293 26.3362 9.27605 26.0606ZM27.6811 26.0943L35.7867 18.495C36.0736 18.2306 36.0736 17.775 35.7867 17.5106L27.6811 9.90558C27.4111 9.65246 26.9836 9.66371 26.7248 9.93371L24.2779 12.5437C24.0192 12.8193 24.0361 13.2581 24.3229 13.5112L29.4192 18L24.3229 22.4831C24.0361 22.7362 24.0136 23.175 24.2779 23.4506L26.7248 26.0606C26.9779 26.3362 27.4054 26.3475 27.6811 26.0943Z" fill="black"></path>
        </g>
        <defs>
          <clipPath id="clip0_396_1271">
            <rect width="36" height="36" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>`,
      title: { text: "JAVA", isMultiLine: false },
      description: [
        "Gain proficiency in Java",
        "programming, covering object-",
        "oriented principles, data",
        "structures, and multithreading for",
        "scalable..."
      ],
      lectures: "70",
      duration: "11h 50m",
  originalPrice: "₹2999",
  discountedPrice: "₹2700",
  discount: "10% OFF"
    },
    {
      image: {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/145a094a8f7e2f26cc5998726e801db255416d8f?width=640",
        isSpecial: true
      },
      icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 36px; height: 36px; margin-bottom: 16px">
        <g clip-path="url(#clip0_396_1296)">
          <path d="M15.6886 32.3718L12.2573 31.3762C11.8973 31.275 11.6948 30.8981 11.7961 30.5381L19.4742 4.08933C19.5754 3.72933 19.9523 3.52683 20.3123 3.62808L23.7436 4.62371C24.1036 4.72496 24.3061 5.10183 24.2048 5.46183L16.5267 31.9106C16.4198 32.2706 16.0486 32.4787 15.6886 32.3718ZM9.27605 26.0606L11.7229 23.4506C11.9817 23.175 11.9648 22.7362 11.6779 22.4831L6.58168 18L11.6779 13.5168C11.9648 13.2637 11.9873 12.825 11.7229 12.5493L9.27605 9.93933C9.02293 9.66933 8.59543 9.65246 8.3198 9.91121L0.21418 17.505C-0.0726953 17.7693 -0.0726953 18.225 0.21418 18.4893L8.3198 26.0887C8.59543 26.3475 9.02293 26.3362 9.27605 26.0606ZM27.6811 26.0943L35.7867 18.495C36.0736 18.2306 36.0736 17.775 35.7867 17.5106L27.6811 9.90558C27.4111 9.65246 26.9836 9.66371 26.7248 9.93371L24.2779 12.5437C24.0192 12.8193 24.0361 13.2581 24.3229 13.5112L29.4192 18L24.3229 22.4831C24.0361 22.7362 24.0136 23.175 24.2779 23.4506L26.7248 26.0606C26.9779 26.3362 27.4054 26.3475 27.6811 26.0943Z" fill="black"></path>
        </g>
        <defs>
          <clipPath id="clip0_396_1296">
            <rect width="36" height="36" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>`,
      title: { text: ".NET", isMultiLine: false },
      description: [
        "A .NET course teaches you how",
        "to develop applications using",
        "Microsoft's .NET framework.",
        "You'll..."
      ],
      lectures: "34",
      duration: "11h 50m",
  originalPrice: "₹2999",
  discountedPrice: "₹2700",
  discount: "10% OFF"
    },
    {
      image: {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/6baad2cd2bde0b2508450d8aaa1c3ba168e554e6?width=572",
        isSpecial: false
      },
      icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 36px; height: 36px; margin-bottom: 16px">
        <g clip-path="url(#clip0_396_1320)">
          <path d="M15.6886 32.3718L12.2573 31.3762C11.8973 31.275 11.6948 30.8981 11.7961 30.5381L19.4742 4.08933C19.5754 3.72933 19.9523 3.52683 20.3123 3.62808L23.7436 4.62371C24.1036 4.72496 24.3061 5.10183 24.2048 5.46183L16.5267 31.9106C16.4198 32.2706 16.0486 32.4787 15.6886 32.3718ZM9.27605 26.0606L11.7229 23.4506C11.9817 23.175 11.9648 22.7362 11.6779 22.4831L6.58168 18L11.6779 13.5168C11.9648 13.2637 11.9873 12.825 11.7229 12.5493L9.27605 9.93933C9.02293 9.66933 8.59543 9.65246 8.3198 9.91121L0.21418 17.505C-0.0726953 17.7693 -0.0726953 18.225 0.21418 18.4893L8.3198 26.0887C8.59543 26.3475 9.02293 26.3362 9.27605 26.0606ZM27.6811 26.0943L35.7867 18.495C36.0736 18.2306 36.0736 17.775 35.7867 17.5106L27.6811 9.90558C27.4111 9.65246 26.9836 9.66371 26.7248 9.93371L24.2779 12.5437C24.0192 12.8193 24.0361 13.2581 24.3229 13.5112L29.4192 18L24.3229 22.4831C24.0361 22.7362 24.0136 23.175 24.2779 23.4506L26.7248 26.0606C26.9779 26.3362 27.4054 26.3475 27.6811 26.0943Z" fill="black"></path>
        </g>
        <defs>
          <clipPath id="clip0_396_1320">
            <rect width="36" height="36" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>`,
      title: { text: "Angular", isMultiLine: false },
      description: [
        "Comprehensive course on",
        "Angular for modern web",
        "development and dynamic user",
        "interfaces"
      ],
      lectures: "34",
      duration: "10h 30m",
      originalPrice: "₹2598",
      discountedPrice: "₹1299",
      discount: "50% OFF"
    },
    {
      image: {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/07076cf557e9dd0438c66e26d80e63039723ea71?width=572",
        isSpecial: false
      },
      icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 36px; height: 36px; margin-bottom: 16px">
        <g clip-path="url(#clip0_396_1344)">
          <path d="M15.6886 32.3718L12.2573 31.3762C11.8973 31.275 11.6948 30.8981 11.7961 30.5381L19.4742 4.08933C19.5754 3.72933 19.9523 3.52683 20.3123 3.62808L23.7436 4.62371C24.1036 4.72496 24.3061 5.10183 24.2048 5.46183L16.5267 31.9106C16.4198 32.2706 16.0486 32.4787 15.6886 32.3718ZM9.27605 26.0606L11.7229 23.4506C11.9817 23.175 11.9648 22.7362 11.6779 22.4831L6.58168 18L11.6779 13.5168C11.9648 13.2637 11.9873 12.825 11.7229 12.5493L9.27605 9.93933C9.02293 9.66933 8.59543 9.65246 8.3198 9.91121L0.21418 17.505C-0.0726953 17.7693 -0.0726953 18.225 0.21418 18.4893L8.3198 26.0887C8.59543 26.3475 9.02293 26.3362 9.27605 26.0606ZM27.6811 26.0943L35.7867 18.495C36.0736 18.2306 36.0736 17.775 35.7867 17.5106L27.6811 9.90558C27.4111 9.65246 26.9836 9.66371 26.7248 9.93371L24.2779 12.5437C24.0192 12.8193 24.0361 13.2581 24.3229 13.5112L29.4192 18L24.3229 22.4831C24.0361 22.7362 24.0136 23.175 24.2779 23.4506L26.7248 26.0606C26.9779 26.3362 27.4054 26.3475 27.6811 26.0943Z" fill="black"></path>
        </g>
        <defs>
          <clipPath id="clip0_396_1344">
            <rect width="36" height="36" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>`,
      title: { text: "DevOps", isMultiLine: false },
      description: [
        "Comprehensive course on",
        "DevOps for automation, CI/CD,",
        "and scalable infrastructure",
        "management"
      ],
      lectures: "66",
      duration: "25h 30m",
      originalPrice: "₹2598",
      discountedPrice: "₹1299",
      discount: "50% OFF"
    },
    {
      image: {
        src: "https://api.builder.io/api/v1/image/assets/TEMP/b11941507a77c1edd5cb86c8317cd22be03e4c0f?width=572",
        isSpecial: false
      },
      icon: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 36px; height: 36px; margin-bottom: 16px">
        <g clip-path="url(#clip0_396_1367)">
          <path d="M15.6886 32.3718L12.2573 31.3762C11.8973 31.275 11.6948 30.8981 11.7961 30.5381L19.4742 4.08933C19.5754 3.72933 19.9523 3.52683 20.3123 3.62808L23.7436 4.62371C24.1036 4.72496 24.3061 5.10183 24.2048 5.46183L16.5267 31.9106C16.4198 32.2706 16.0486 32.4787 15.6886 32.3718ZM9.27605 26.0606L11.7229 23.4506C11.9817 23.175 11.9648 22.7362 11.6779 22.4831L6.58168 18L11.6779 13.5168C11.9648 13.2637 11.9873 12.825 11.7229 12.5493L9.27605 9.93933C9.02293 9.66933 8.59543 9.65246 8.3198 9.91121L0.21418 17.505C-0.0726953 17.7693 -0.0726953 18.225 0.21418 18.4893L8.3198 26.0887C8.59543 26.3475 9.02293 26.3362 9.27605 26.0606ZM27.6811 26.0943L35.7867 18.495C36.0736 18.2306 36.0736 17.775 35.7867 17.5106L27.6811 9.90558C27.4111 9.65246 26.9836 9.66371 26.7248 9.93371L24.2779 12.5437C24.0192 12.8193 24.0361 13.2581 24.3229 13.5112L29.4192 18L24.3229 22.4831C24.0361 22.7362 24.0136 23.175 24.2779 23.4506L26.7248 26.0606C26.9779 26.3362 27.4054 26.3475 27.6811 26.0943Z" fill="black"></path>
        </g>
        <defs>
          <clipPath id="clip0_396_1367">
            <rect width="36" height="36" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>`,
      title: { text: "PHP", isMultiLine: false },
      description: [
        "Comprehensive course on PHP",
        "for dynamic web development",
        "and server-side scripting"
      ],
      lectures: "34",
      duration: "10h 30m",
      originalPrice: "₹2598",
      discountedPrice: "₹1299",
      discount: "50% OFF"
    }
  ];

  return (
  <section className="relative px-28 py-20 w-full min-h-screen bg-[#0C0C0D] max-xl:px-16 max-lg:px-10 max-md:px-6 max-md:pt-20 max-md:pb-0 max-sm:px-2 max-sm:pt-10 max-sm:pb-0">
    {/* glow effect */}
    <svg width="495" height="675" viewBox="0 0 495 675" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute -bottom-100 -left-5 overflow-hidden'>
        <g filter="url(#filter0_f_396_1025)">
        <rect width="433" height="275" transform="matrix(1 0 0 -1 -138 475)" fill="url(#paint0_linear_396_1025)" fill-opacity="0.3"/>
        </g>
        <defs>
        <filter id="filter0_f_396_1025" x="-338" y="0" width="833" height="675" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_396_1025"/>
        </filter>
        <linearGradient id="paint0_linear_396_1025" x1="433" y1="-21.0191" x2="125.676" y2="469.701" gradientUnits="userSpaceOnUse">
        <stop stop-color="#9AC4FE"/>
        <stop offset="1" stop-color="#1545C2"/>
        </linearGradient>
        </defs>
        </svg>
  <header className="flex flex-col gap-6 items-center mx-auto mt-0 mb-32 w-[815px] max-xl:w-[700px] max-lg:w-[600px] max-md:mb-20 max-md:w-full max-sm:mb-16 max-sm:w-full">
  <div className="flex gap-2 sm:gap-3 justify-center items-center px-3 sm:px-6 py-2 sm:py-[8px] sm:pb-[10px] bg-[#A4A8FF2E] bg-opacity-[16%] rounded-[34.286px] w-full max-w-[320px] max-sm:max-w-[220px]">
          <span className="text-lg sm:text-3xl leading-8 sm:leading-9 text-[#91B5FE]">
            Our Courses
          </span>
        </div>
  <h1 className="text-5xl font-bold text-center leading-[57.6px] text-slate-50 max-xl:text-4xl max-xl:leading-[44px] max-lg:text-3xl max-lg:leading-10 max-md:text-2xl max-md:leading-8 max-sm:text-xl max-sm:leading-7">
          Unlock Your Potential by our Tech Courses
        </h1>
        <div className="flex relative justify-center items-center h-12 w-[628px] max-xl:w-[500px] max-lg:w-[400px] max-md:w-full max-sm:w-full">
          <p className="absolute top-0 h-12 text-2xl leading-6 text-center left-[-118px] text-zinc-400 w-[866px] max-xl:w-[500px] max-lg:w-[400px] max-md:static max-md:w-full max-md:text-lg max-sm:text-base max-sm:leading-6 max-sm:w-full">
            Explore tech excellence with Edubraining courses. Transformative
            learning for a future of possibilities.
          </p>
        </div>
      </header>

  <main className="flex flex-wrap gap-7 justify-center content-start items-start mx-auto my-0 max-xl:gap-6 max-lg:gap-5 max-md:gap-4 max-md:justify-center max-md:w-full max-sm:gap-3 max-sm:flex-col max-sm:items-center">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </main>

      <DecorativeVectors />
    </section>
  );
};

export default CoursesSectionHome;
