import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  EyeIcon,
  Trash,
  User,
  EyeOff,
  AlignCenter,
  X,
  Search,
  Star,
  SunIcon,
  MoonIcon,
  type Icon as LucideIcon,
  Heart,
  LogOut,
  CrossIcon,
  CircleHelp,
  Clock,
  
} from "lucide-react";

// export type Icon = LucideIcon;

export const Icons = {
  logo: Command,
  close: X,
  Heart,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  eyeIcons: EyeIcon,
  eyeOff: EyeOff,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  alignJustify: ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-align-justify"
      {...props}
    >
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </svg>
  ),
  gitHub: ({ ...props }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  home: ({ ...props }) => (
    <svg
      // width="20"
      // height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 18V11.267C19 10.7245 18.8896 10.1876 18.6756 9.68904C18.4616 9.19049 18.1483 8.74069 17.755 8.36701L11.378 2.31001C11.0063 1.9569 10.5132 1.76001 10.0005 1.76001C9.48781 1.76001 8.9947 1.9569 8.623 2.31001L2.245 8.36701C1.85165 8.74069 1.53844 9.19049 1.3244 9.68904C1.11037 10.1876 0.999999 10.7245 1 11.267V18C1 18.5304 1.21071 19.0392 1.58579 19.4142C1.96086 19.7893 2.46957 20 3 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0392 19 18.5304 19 18Z"
        stroke="white"
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  window: ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      {...props}
    >
      <path d="M 46 4.867188 L 4 10.117188 L 4 39.882813 L 46 45.132813 Z M 44 7.132813 L 44 24 L 25 24 L 25 9.507813 Z M 23 9.757813 L 23 24 L 6 24 L 6 11.882813 Z M 6 26 L 23 26 L 23 40.242188 L 6 38.117188 Z M 25 26 L 44 26 L 44 42.867188 L 25 40.492188 Z"></path>
    </svg>
  ),

  message: ({ ...props }) => (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.804101 6.35296C0.524101 8.95596 0.536102 11.958 0.926102 14.55C1.03079 15.2468 1.36698 15.8882 1.88052 16.3707C2.39407 16.8532 3.05508 17.1488 3.7571 17.21L5.2671 17.341C8.4171 17.615 11.5831 17.615 14.7331 17.341L16.2431 17.211C16.9451 17.1498 17.6061 16.8542 18.1197 16.3717C18.6332 15.8892 18.9694 15.2478 19.0741 14.551C19.4641 11.958 19.4761 8.95596 19.1961 6.35296C19.16 6.05103 19.1193 5.74967 19.0741 5.44896C18.9694 4.75211 18.6332 4.11077 18.1197 3.62824C17.6061 3.14572 16.9451 2.85008 16.2431 2.78896L14.7331 2.65896C11.5837 2.38516 8.4165 2.38516 5.2671 2.65896L3.7571 2.78896C3.05508 2.85008 2.39407 3.14572 1.88052 3.62824C1.36698 4.11077 1.03079 4.75211 0.926102 5.44896C0.881018 5.74968 0.840346 6.05105 0.804101 6.35296ZM5.3971 4.15296C8.45966 3.88674 11.5395 3.88674 14.6021 4.15296L16.1121 4.28396C16.4787 4.31597 16.8239 4.47036 17.0922 4.72229C17.3604 4.97423 17.5362 5.30907 17.5911 5.67296L17.6251 5.90596L12.0641 8.99596C11.4327 9.34673 10.7224 9.5308 10.0001 9.5308C9.27783 9.5308 8.56748 9.34673 7.9361 8.99596L2.3751 5.90596L2.4091 5.67296C2.46365 5.30908 2.63913 4.97416 2.90725 4.72218C3.17538 4.4702 3.52054 4.31584 3.8871 4.28396L5.3971 4.15296ZM17.8081 7.51996C18.0025 9.78964 17.9296 12.0743 17.5911 14.327C17.5366 14.6908 17.3611 15.0258 17.0929 15.2777C16.8248 15.5297 16.4797 15.6841 16.1131 15.716L14.6031 15.847C11.5402 16.1132 8.45999 16.1132 5.3971 15.847L3.8871 15.716C3.52054 15.6841 3.17538 15.5297 2.90725 15.2777C2.63913 15.0258 2.46365 14.6908 2.4091 14.327C2.07025 12.0743 1.99709 9.78967 2.1911 7.51996L7.2071 10.307C8.06132 10.7815 9.0224 11.0306 9.9996 11.0306C10.9768 11.0306 11.9379 10.7815 12.7921 10.307L17.8081 7.51996Z"
        fill="currentColor"
        fill-opacity="0.8"
        stroke={props.color || "white"}
      />
      <circle cx="18" cy="4" r="4" fill="#FF1C1C" />
    </svg>
  ),
  store: ({ ...props }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 13.242V20H22V22H2V20H3V13.242C2.38437 12.8311 1.87971 12.2745 1.53082 11.6218C1.18193 10.969 0.999592 10.2402 1 9.5C1 8.673 1.224 7.876 1.633 7.197L4.345 2.5C4.43277 2.34798 4.559 2.22175 4.71101 2.13398C4.86303 2.04621 5.03547 2 5.211 2H18.79C18.9655 2 19.138 2.04621 19.29 2.13398C19.442 2.22175 19.5682 2.34798 19.656 2.5L22.359 7.182C22.777 7.876 23.001 8.672 23.001 9.5C23.001 11.06 22.206 12.435 21 13.242ZM19 13.972C18.3124 14.0491 17.6163 13.9665 16.9659 13.7307C16.3155 13.4948 15.7283 13.1119 15.25 12.612C14.8302 13.0511 14.3258 13.4005 13.7672 13.6393C13.2086 13.878 12.6075 14.001 12 14.001C11.3927 14.0013 10.7916 13.8786 10.233 13.6402C9.67445 13.4018 9.16996 13.0527 8.75 12.614C8.27163 13.1138 7.68437 13.4964 7.03395 13.7321C6.38353 13.9678 5.68749 14.0503 5 13.973V20H19V13.972ZM5.789 4L3.356 8.213C3.17998 8.50891 3.06698 8.83799 3.02409 9.17961C2.98119 9.52123 3.00932 9.86803 3.10672 10.1983C3.20412 10.5285 3.36867 10.8351 3.59008 11.0987C3.81149 11.3624 4.08498 11.5775 4.3934 11.7305C4.70182 11.8836 5.03853 11.9713 5.38242 11.9881C5.72631 12.0049 6.06998 11.9505 6.39187 11.8283C6.71376 11.7061 7.00694 11.5188 7.25303 11.278C7.49912 11.0372 7.69283 10.7482 7.822 10.429C8.157 9.592 9.342 9.592 9.678 10.429C9.8633 10.8934 10.1836 11.2916 10.5975 11.5721C11.0115 11.8526 11.5 12.0025 12 12.0025C12.5 12.0025 12.9885 11.8526 13.4025 11.5721C13.8164 11.2916 14.1367 10.8934 14.322 10.429C14.657 9.592 15.842 9.592 16.178 10.429C16.3078 10.7484 16.5022 11.0376 16.7491 11.2783C16.996 11.519 17.2901 11.706 17.6127 11.8275C17.9354 11.9491 18.2797 12.0026 18.6241 11.9847C18.9684 11.9668 19.3053 11.8778 19.6136 11.7234C19.9219 11.569 20.1949 11.3525 20.4155 11.0875C20.6361 10.8225 20.7995 10.5148 20.8955 10.1836C20.9914 9.85238 21.0178 9.50493 20.973 9.16305C20.9281 8.82118 20.8131 8.49227 20.635 8.197L18.21 4H5.789Z"
        fill="currentColor"
        fill-opacity="0.8"
      />
    </svg>
  ),
  payment: ({ ...props }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 7.125C1.5 6.22989 1.85558 5.37145 2.48851 4.73851C3.12145 4.10558 3.97989 3.75 4.875 3.75H19.125C20.0201 3.75 20.8785 4.10558 21.5115 4.73851C22.1444 5.37145 22.5 6.22989 22.5 7.125V16.875C22.5 17.7701 22.1444 18.6285 21.5115 19.2615C20.8785 19.8944 20.0201 20.25 19.125 20.25H4.875C3.97989 20.25 3.12145 19.8944 2.48851 19.2615C1.85558 18.6285 1.5 17.7701 1.5 16.875V7.125ZM4.875 5.25C4.37772 5.25 3.90081 5.44754 3.54917 5.79917C3.19754 6.15081 3 6.62772 3 7.125V8.25H21V7.125C21 6.62772 20.8025 6.15081 20.4508 5.79917C20.0992 5.44754 19.6223 5.25 19.125 5.25H4.875ZM3 16.875C3 17.3723 3.19754 17.8492 3.54917 18.2008C3.90081 18.5525 4.37772 18.75 4.875 18.75H19.125C19.6223 18.75 20.0992 18.5525 20.4508 18.2008C20.8025 17.8492 21 17.3723 21 16.875V9.75H3V16.875ZM15.75 14.25H18C18.1989 14.25 18.3897 14.329 18.5303 14.4697C18.671 14.6103 18.75 14.8011 18.75 15C18.75 15.1989 18.671 15.3897 18.5303 15.5303C18.3897 15.671 18.1989 15.75 18 15.75H15.75C15.5511 15.75 15.3603 15.671 15.2197 15.5303C15.079 15.3897 15 15.1989 15 15C15 14.8011 15.079 14.6103 15.2197 14.4697C15.3603 14.329 15.5511 14.25 15.75 14.25Z"
        fill="currentColor"
        fill-opacity="0.8"
      />
    </svg>
  ),
  leaderboard: ({ ...props }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_1_155)">
        <path
          d="M6.40005 23.2H17.6M12 23.2V15.2M12 15.2C13.6974 15.2 15.3253 14.5258 16.5255 13.3255C17.7258 12.1253 18.4 10.4974 18.4 8.80005V2.40005C18.4 1.9757 18.2315 1.56874 17.9314 1.26868C17.6314 0.96862 17.2244 0.800049 16.8 0.800049H7.20005C6.7757 0.800049 6.36874 0.96862 6.06868 1.26868C5.76862 1.56874 5.60005 1.9757 5.60005 2.40005V8.80005C5.60005 10.4974 6.27433 12.1253 7.47457 13.3255C8.6748 14.5258 10.3027 15.2 12 15.2ZM5.60005 4.00005H4.00005C3.15136 4.00005 2.33742 4.33719 1.73731 4.93731C1.13719 5.53742 0.800049 6.35136 0.800049 7.20005C0.800049 8.04874 1.13719 8.86267 1.73731 9.46279C2.33742 10.0629 3.15136 10.4 4.00005 10.4H5.60005M18.4 4.00005H20C20.8487 4.00005 21.6627 4.33719 22.2628 4.93731C22.8629 5.53742 23.2 6.35136 23.2 7.20005C23.2 8.04874 22.8629 8.86267 22.2628 9.46279C21.6627 10.0629 20.8487 10.4 20 10.4H18.4"
          stroke={props.color || "white"}
          stroke-opacity="0.8"
          stroke-width="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_155">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  dashboard: ({ ...props }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.02 1.515C1.88607 1.515 1.75762 1.56821 1.66291 1.66291C1.56821 1.75762 1.515 1.88607 1.515 2.02V7.07C1.515 7.35 1.741 7.576 2.02 7.576H7.07C7.1364 7.57613 7.20218 7.56317 7.26356 7.53785C7.32495 7.51253 7.38074 7.47535 7.42774 7.42844C7.47473 7.38154 7.51202 7.32582 7.53746 7.26449C7.5629 7.20315 7.576 7.1374 7.576 7.071V2.02C7.57613 1.9536 7.56317 1.88782 7.53785 1.82644C7.51253 1.76505 7.47535 1.70926 7.42844 1.66226C7.38154 1.61526 7.32582 1.57798 7.26449 1.55254C7.20315 1.5271 7.1374 1.514 7.071 1.514L2.02 1.515ZM7.07 10.909C7.60574 10.909 8.11953 11.1218 8.49836 11.5006C8.87718 11.8795 9.09 12.3933 9.09 12.929V17.979C9.09013 18.2444 9.03798 18.5071 8.93652 18.7523C8.83507 18.9975 8.6863 19.2203 8.49871 19.408C8.31112 19.5957 8.08839 19.7446 7.84325 19.8461C7.59811 19.9477 7.33535 20 7.07 20H2.02C1.48426 20 0.970468 19.7872 0.591644 19.4084C0.212821 19.0295 0 18.5157 0 17.98V12.93C0 12.3943 0.212821 11.8805 0.591644 11.5016C0.970468 11.1228 1.48426 10.91 2.02 10.91L7.07 10.909ZM17.98 10.909C18.2454 10.909 18.5081 10.9613 18.7533 11.0629C18.9984 11.1644 19.2211 11.3133 19.4087 11.501C19.5963 11.6887 19.7451 11.9115 19.8465 12.1567C19.948 12.4019 20.0001 12.6646 20 12.93V17.98C20 18.5157 19.7872 19.0295 19.4084 19.4084C19.0295 19.7872 18.5157 20 17.98 20H12.93C12.3943 20 11.8805 19.7872 11.5016 19.4084C11.1228 19.0295 10.91 18.5157 10.91 17.98V12.93C10.91 12.3943 11.1228 11.8805 11.5016 11.5016C11.8805 11.1228 12.3943 10.91 12.93 10.91L17.98 10.909ZM7.07 12.424H2.02C1.88607 12.424 1.75762 12.4772 1.66291 12.5719C1.56821 12.6666 1.515 12.7951 1.515 12.929V17.979C1.515 18.259 1.741 18.485 2.02 18.485H7.07C7.1364 18.4851 7.20218 18.4722 7.26356 18.4468C7.32495 18.4215 7.38074 18.3843 7.42774 18.3374C7.47473 18.2905 7.51202 18.2348 7.53746 18.1735C7.5629 18.1122 7.576 18.0464 7.576 17.98V12.93C7.57613 12.8636 7.56317 12.7978 7.53785 12.7364C7.51253 12.6751 7.47535 12.6193 7.42844 12.5723C7.38154 12.5253 7.32582 12.488 7.26449 12.4625C7.20315 12.4371 7.1364 12.424 7.07 12.424ZM17.98 12.424H12.93C12.8636 12.4239 12.7978 12.4368 12.7364 12.4622C12.6751 12.4875 12.6193 12.5247 12.5723 12.5716C12.5253 12.6185 12.488 12.6742 12.4625 12.7355C12.4371 12.7968 12.424 12.8626 12.424 12.929V17.979C12.424 18.259 12.65 18.485 12.929 18.485H17.979C18.0454 18.4851 18.1112 18.4722 18.1726 18.4468C18.2339 18.4215 18.2897 18.3843 18.3367 18.3374C18.3837 18.2905 18.421 18.2348 18.4465 18.1735C18.4719 18.1122 18.485 18.0464 18.485 17.98V12.93C18.4851 12.8636 18.4722 12.7978 18.4468 12.7364C18.4215 12.6751 18.3843 12.6193 18.3374 12.5723C18.2905 12.5253 18.2348 12.488 18.1735 12.4625C18.1122 12.4371 18.0464 12.424 17.98 12.424ZM7.07 0C7.60574 0 8.11953 0.212821 8.49836 0.591644C8.87718 0.970468 9.09 1.48426 9.09 2.02V7.07C9.09 7.60574 8.87718 8.11953 8.49836 8.49836C8.11953 8.87718 7.60574 9.09 7.07 9.09H2.02C1.48426 9.09 0.970468 8.87718 0.591644 8.49836C0.212821 8.11953 0 7.60574 0 7.07V2.02C0 1.48426 0.212821 0.970468 0.591644 0.591644C0.970468 0.212821 1.48426 0 2.02 0L7.07 0ZM17.98 0C18.5157 0 19.0295 0.212821 19.4084 0.591644C19.7872 0.970468 20 1.48426 20 2.02V7.07C20 7.60574 19.7872 8.11953 19.4084 8.49836C19.0295 8.87718 18.5157 9.09 17.98 9.09H12.93C12.3943 9.09 11.8805 8.87718 11.5016 8.49836C11.1228 8.11953 10.91 7.60574 10.91 7.07V2.02C10.91 1.48426 11.1228 0.970468 11.5016 0.591644C11.8805 0.212821 12.3943 0 12.93 0L17.98 0ZM17.98 1.515H12.93C12.8636 1.51487 12.7978 1.52783 12.7364 1.55315C12.6751 1.57847 12.6193 1.61565 12.5723 1.66256C12.5253 1.70946 12.488 1.76518 12.4625 1.82651C12.4371 1.88785 12.424 1.9536 12.424 2.02V7.07C12.424 7.35 12.65 7.576 12.929 7.576H17.979C18.0454 7.57613 18.1112 7.56317 18.1726 7.53785C18.2339 7.51253 18.2897 7.47535 18.3367 7.42844C18.3837 7.38154 18.421 7.32582 18.4465 7.26449C18.4719 7.20315 18.485 7.1374 18.485 7.071V2.02C18.4851 1.9536 18.4722 1.88782 18.4468 1.82644C18.4215 1.76505 18.3843 1.70926 18.3374 1.66226C18.2905 1.61526 18.2348 1.57798 18.1735 1.55254C18.1122 1.5271 18.0464 1.515 17.98 1.515Z"
        fill="currentColor"
        fill-opacity="0.8"
      />
    </svg>
  ),
  twitter: ({ ...props }) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="7.5"
        stroke={props.color || "white"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.021 11.343C23.53 11.256 24.099 11.227 24.635 11.318C25.5898 11.4792 26.4744 11.9226 27.175 12.591C27.631 12.601 28.08 12.511 28.477 12.383C28.8607 12.2578 29.2291 12.0898 29.575 11.882L29.584 11.876C29.728 11.78 29.9008 11.7368 30.073 11.7537C30.2452 11.7706 30.4063 11.8465 30.5289 11.9685C30.6516 12.0906 30.7283 12.2513 30.746 12.4234C30.7637 12.5956 30.7213 12.7685 30.626 12.913C30.419 13.228 30.13 13.79 29.807 14.42L29.652 14.721C29.467 15.081 29.277 15.445 29.1 15.757C28.989 15.953 28.87 16.152 28.75 16.324V16.598C28.7623 18.2366 28.4481 19.8613 27.8258 21.3772C27.2034 22.8931 26.2854 24.2699 25.1252 25.4271C23.965 26.5844 22.586 27.499 21.0685 28.1176C19.5511 28.7362 17.9256 29.0463 16.287 29.03C13.9125 29.0321 11.5879 28.348 9.59304 27.06C9.45045 26.9677 9.34338 26.8299 9.28935 26.6689C9.23531 26.5079 9.23751 26.3333 9.29558 26.1737C9.35365 26.0142 9.46415 25.879 9.60902 25.7904C9.75388 25.7018 9.92452 25.665 10.093 25.686C11.4709 25.8507 12.8674 25.6284 14.126 25.044C13.512 24.7648 12.9628 24.3608 12.5134 23.8577C12.064 23.3547 11.7244 22.7635 11.516 22.122C11.4763 21.9991 11.469 21.8682 11.4948 21.7417C11.5205 21.6152 11.5785 21.4975 11.663 21.4L11.673 21.39C11.1654 20.9377 10.7586 20.3838 10.479 19.7641C10.1994 19.1444 10.0532 18.4728 10.05 17.793V17.741C10.05 17.5763 10.1041 17.4162 10.204 17.2854C10.304 17.1545 10.4442 17.0602 10.603 17.017C10.2644 16.3413 10.0887 15.5957 10.09 14.84C10.0895 13.9831 10.3136 13.1411 10.74 12.398C10.8006 12.2925 10.886 12.2033 10.9887 12.1381C11.0914 12.073 11.2085 12.0338 11.3297 12.0239C11.451 12.0141 11.5728 12.0339 11.6847 12.0816C11.7966 12.1294 11.8952 12.2036 11.972 12.298C13.7212 14.4529 16.2272 15.8586 18.978 16.228C18.9542 15.3282 19.1811 14.4394 19.6336 13.6613C20.0861 12.8832 20.7462 12.2463 21.54 11.822C21.942 11.608 22.474 11.437 23.022 11.343H23.021ZM11.743 18.891C11.9372 19.4375 12.27 19.9242 12.7087 20.3036C13.1475 20.6829 13.6772 20.9418 14.246 21.055C14.4099 21.0876 14.5582 21.1741 14.6674 21.3006C14.7765 21.4271 14.8403 21.5865 14.8486 21.7534C14.8568 21.9203 14.8091 22.0852 14.713 22.2219C14.6169 22.3586 14.4779 22.4593 14.318 22.508C14.046 22.591 13.767 22.648 13.484 22.681C13.7913 23.0773 14.1834 23.3998 14.6316 23.6247C15.0798 23.8497 15.5726 23.9714 16.074 23.981C16.2287 23.9839 16.3787 24.0345 16.5034 24.126C16.6281 24.2175 16.7215 24.3453 16.7708 24.4919C16.8201 24.6385 16.8228 24.7968 16.7787 24.945C16.7345 25.0933 16.6455 25.2242 16.524 25.32C15.4813 26.1404 14.2695 26.7193 12.976 27.015C14.0469 27.3577 15.1647 27.5315 16.289 27.53H16.298C17.738 27.5452 19.1666 27.2732 20.5004 26.73C21.8341 26.1868 23.0462 25.3833 24.0658 24.3663C25.0855 23.3494 25.8922 22.1394 26.439 20.8072C26.9857 19.4749 27.2614 18.047 27.25 16.607V16.072C27.2499 15.8899 27.316 15.7139 27.436 15.577C27.506 15.498 27.626 15.316 27.796 15.017C27.956 14.735 28.134 14.395 28.319 14.036L28.352 13.97C27.8297 14.0875 27.2918 14.1203 26.759 14.067C26.5789 14.0473 26.4119 13.9632 26.289 13.83C25.7861 13.2846 25.1165 12.9217 24.385 12.798C24.0161 12.7458 23.6412 12.7542 23.275 12.823C22.9181 12.8785 22.5716 12.9874 22.247 13.146C21.5927 13.4956 21.0729 14.0525 20.7692 14.7294C20.4655 15.4062 20.3951 16.1648 20.569 16.886C20.5964 16.9994 20.5969 17.1176 20.5706 17.2313C20.5443 17.3449 20.4918 17.4508 20.4173 17.5407C20.3428 17.6305 20.2485 17.7017 20.1416 17.7486C20.0348 17.7955 19.9185 17.8169 19.802 17.811C16.7296 17.6556 13.8249 16.3627 11.653 14.184C11.6108 14.4004 11.5897 14.6204 11.59 14.841V14.843C11.5889 15.3937 11.724 15.9362 11.9833 16.4221C12.2425 16.908 12.6179 17.3223 13.076 17.628C13.2106 17.7185 13.3121 17.8502 13.3655 18.0033C13.4189 18.1565 13.4212 18.3228 13.372 18.4773C13.3229 18.6319 13.2251 18.7663 13.0931 18.8605C12.9611 18.9548 12.8022 19.0037 12.64 19C12.3382 18.9916 12.0379 18.9558 11.743 18.891Z"
        fill="currentColor"
      />
    </svg>
  ),
  facebook: ({ ...props }) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="7.5"
        stroke={props.color || "white"}
      />
      <g clip-path="url(#clip0_1451_707)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.0564 11.288C19.0408 10.3034 20.376 9.75016 21.7684 9.75H24.4684C24.6673 9.75 24.858 9.82902 24.9987 9.96967C25.1393 10.1103 25.2184 10.3011 25.2184 10.5V14.1C25.2184 14.2989 25.1393 14.4897 24.9987 14.6303C24.858 14.771 24.6673 14.85 24.4684 14.85H21.7684C21.7487 14.85 21.7292 14.8539 21.711 14.8614C21.6928 14.869 21.6762 14.88 21.6623 14.8939C21.6484 14.9079 21.6373 14.9244 21.6298 14.9426C21.6222 14.9608 21.6184 14.9803 21.6184 15V16.95H24.4684C24.5824 16.9499 24.6949 16.9759 24.7974 17.0258C24.8999 17.0758 24.9896 17.1485 25.0598 17.2383C25.13 17.3282 25.1788 17.4328 25.2025 17.5444C25.2261 17.6559 25.224 17.7714 25.1964 17.882L24.2964 21.482C24.2558 21.6443 24.162 21.7884 24.0301 21.8913C23.8982 21.9942 23.7357 22.0501 23.5684 22.05H21.6184V28.5C21.6184 28.6989 21.5393 28.8897 21.3987 29.0303C21.258 29.171 21.0673 29.25 20.8684 29.25H17.2684C17.0694 29.25 16.8787 29.171 16.738 29.0303C16.5974 28.8897 16.5184 28.6989 16.5184 28.5V22.05H14.5684C14.3694 22.05 14.1787 21.971 14.038 21.8303C13.8974 21.6897 13.8184 21.4989 13.8184 21.3V17.7C13.8184 17.6015 13.8378 17.504 13.8754 17.413C13.9131 17.322 13.9684 17.2393 14.038 17.1697C14.1077 17.1 14.1904 17.0448 14.2813 17.0071C14.3723 16.9694 14.4699 16.95 14.5684 16.95H16.5184V15C16.5185 13.6077 17.0718 12.2724 18.0564 11.288ZM21.7684 11.25C20.7738 11.25 19.82 11.6451 19.1167 12.3483C18.4134 13.0516 18.0184 14.0054 18.0184 15V17.7C18.0184 17.8989 17.9393 18.0897 17.7987 18.2303C17.658 18.371 17.4673 18.45 17.2684 18.45H15.3184V20.55H17.2684C17.4673 20.55 17.658 20.629 17.7987 20.7697C17.9393 20.9103 18.0184 21.1011 18.0184 21.3V27.75H20.1184V21.3C20.1184 21.1011 20.1974 20.9103 20.338 20.7697C20.4787 20.629 20.6694 20.55 20.8684 20.55H22.9824L23.5074 18.45H20.8684C20.6694 18.45 20.4787 18.371 20.338 18.2303C20.1974 18.0897 20.1184 17.8989 20.1184 17.7V15C20.1184 14.5624 20.2922 14.1427 20.6016 13.8333C20.9111 13.5238 21.3308 13.35 21.7684 13.35H23.7184V11.25H21.7684Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1451_707">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(8 8)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  instagram: ({ ...props }) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="7.5"
        stroke={props.color || "white"}
      />
      <g clip-path="url(#clip0_1451_711)">
        <path
          d="M19.5684 23.5C20.6292 23.5 21.6466 23.0786 22.3968 22.3284C23.1469 21.5783 23.5684 20.5609 23.5684 19.5C23.5684 18.4391 23.1469 17.4217 22.3968 16.6716C21.6466 15.9214 20.6292 15.5 19.5684 15.5C18.5075 15.5 17.4901 15.9214 16.7399 16.6716C15.9898 17.4217 15.5684 18.4391 15.5684 19.5C15.5684 20.5609 15.9898 21.5783 16.7399 22.3284C17.4901 23.0786 18.5075 23.5 19.5684 23.5Z"
          stroke={props.color || "white"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.5684 23.5V15.5C10.5684 14.1739 11.0951 12.9021 12.0328 11.9645C12.9705 11.0268 14.2423 10.5 15.5684 10.5H23.5684C24.8944 10.5 26.1662 11.0268 27.1039 11.9645C28.0416 12.9021 28.5684 14.1739 28.5684 15.5V23.5C28.5684 24.8261 28.0416 26.0979 27.1039 27.0355C26.1662 27.9732 24.8944 28.5 23.5684 28.5H15.5684C14.2423 28.5 12.9705 27.9732 12.0328 27.0355C11.0951 26.0979 10.5684 24.8261 10.5684 23.5Z"
          stroke={props.color || "white"}
          stroke-width="1.5"
        />
        <path
          d="M25.0684 14.01L25.0784 13.999"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1451_711">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(8 8)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  notification: ({ ...props }) => (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="21"
        cy="21"
        r="20.25"
        stroke="white"
        stroke-opacity="0.8"
        stroke-width="1.5"
      />
      <g clip-path="url(#clip0_1451_437)">
        <path
          d="M28.8556 24.46C28.789 24.3798 28.7236 24.2996 28.6595 24.2222C27.7772 23.1551 27.2434 22.511 27.2434 19.4899C27.2434 17.9259 26.8692 16.6425 26.1317 15.68C25.5879 14.969 24.8528 14.4296 23.8839 14.031C23.8714 14.024 23.8603 14.0149 23.851 14.0041C23.5025 12.8371 22.5488 12.0554 21.4732 12.0554C20.3976 12.0554 19.4443 12.8371 19.0958 14.0029C19.0865 14.0133 19.0755 14.0221 19.0633 14.0289C16.8023 14.9598 15.7034 16.7456 15.7034 19.4887C15.7034 22.511 15.1704 23.1551 14.2873 24.221C14.2232 24.2984 14.1578 24.377 14.0912 24.4588C13.9193 24.6662 13.8103 24.9185 13.7773 25.1859C13.7442 25.4533 13.7884 25.7245 13.9047 25.9676C14.1522 26.4889 14.6796 26.8126 15.2815 26.8126H27.6693C28.2684 26.8126 28.7922 26.4893 29.0405 25.9704C29.1572 25.7273 29.2019 25.4558 29.1691 25.1881C29.1364 24.9205 29.0276 24.6678 28.8556 24.46ZM21.4732 30.0221C22.0527 30.0216 22.6213 29.8643 23.1187 29.5668C23.616 29.2694 24.0236 28.8429 24.2981 28.3325C24.3111 28.308 24.3175 28.2807 24.3167 28.253C24.3159 28.2253 24.308 28.1984 24.2937 28.1747C24.2794 28.151 24.2592 28.1314 24.2351 28.1178C24.211 28.1042 24.1838 28.0971 24.1562 28.0971H18.791C18.7633 28.097 18.7361 28.1041 18.7119 28.1176C18.6878 28.1312 18.6675 28.1508 18.6532 28.1745C18.6389 28.1982 18.6309 28.2252 18.6301 28.2529C18.6293 28.2806 18.6357 28.308 18.6487 28.3325C18.9232 28.8428 19.3307 29.2693 19.828 29.5667C20.3252 29.8642 20.8937 30.0215 21.4732 30.0221Z"
          fill="white"
          fill-opacity="0.8"
        />
        <circle cx="27.9999" cy="14.9333" r="3.73333" fill="#FF1C1C" />
      </g>
      <defs>
        <clipPath id="clip0_1451_437">
          <rect
            width="20.5333"
            height="20.5333"
            fill="white"
            transform="translate(11.2 11.2)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  cart: ({ ...props }) => (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      stroke={props.color || "white"}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <circle
        cx="21"
        cy="21"
        r="20.25"
        stroke="white"
        stroke-opacity="0.8"
        stroke-width="1.5"
      />
      <g clipPath="url(#clip0_1451_443)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.6876 15.3334V14.453C17.6876 13.5902 18.0303 12.7628 18.6404 12.1527C19.2504 11.5427 20.0778 11.2 20.9406 11.2C21.8034 11.2 22.6308 11.5427 23.2408 12.1527C23.8509 12.7628 24.1936 13.5902 24.1936 14.453V15.3334C25.31 15.3673 25.9936 15.487 26.515 15.9199C27.2376 16.5201 27.4284 17.5351 27.8092 19.5658L28.4598 23.0357C28.9951 25.8914 29.2622 27.3193 28.4824 28.2596C27.7017 29.2 26.2487 29.2 23.3435 29.2H18.5377C15.6317 29.2 14.1795 29.2 13.3988 28.2596C12.6181 27.3193 12.887 25.8914 13.4214 23.0357L14.072 19.5658C14.4537 17.536 14.6436 16.5201 15.3662 15.9199C15.8876 15.487 16.5712 15.3673 17.6876 15.3334ZM18.9888 14.453C18.9888 13.9353 19.1944 13.4389 19.5605 13.0728C19.9265 12.7068 20.423 12.5012 20.9406 12.5012C21.4583 12.5012 21.9547 12.7068 22.3207 13.0728C22.6868 13.4389 22.8924 13.9353 22.8924 14.453V15.3204H18.9888V14.453Z"
          fill={props.color || "white"}
          // stroke={props.color || "white"}
          fillOpacity="1"
        />
      </g>
      <defs>
        <clipPath id="clip0_1451_443">
          <rect
            width="20.5333"
            height="20.5333"
            fill="white"
            transform="translate(11.2 11.2)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  profile: ({ ...props }) => (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="21"
        cy="21"
        r="20"
        stroke={props.color || "white"}
        // fill="currentColor"+156
        stroke-opacity="0.8"
        stroke-width="2"
      />
      <text
        x="50%"
        y="50%"
        alignmentBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontWeight="bold"
      >
        D
      </text>
      <defs>
        <clipPath id="clip0_1451_443">
          <rect
            width="20.5333"
            height="20.5333"
            fill="blue"
            transform="translate(11.2 11.2)"
          />
        </clipPath>
      </defs>
    </svg>
  ),

  star: Star,
  search: Search,
  heart: Heart,
  check: Check,
  logout: LogOut,
  questionMark: CircleHelp,
  cross: CrossIcon,
  clock: Clock,
  x: X,
};
