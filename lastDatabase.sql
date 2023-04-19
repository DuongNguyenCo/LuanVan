-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bfl9usluda5qhkunbbwv-mysql.services.clever-cloud.com:3306
-- Generation Time: Apr 19, 2023 at 04:48 PM
-- Server version: 8.0.22-13
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bfl9usluda5qhkunbbwv`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` int NOT NULL,
  `id_business` int DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `ward` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `id_business`, `street`, `ward`, `district`, `city`, `createdAt`, `updatedAt`) VALUES
(1, 1, '180 Duyên Hải', 'Phường Duyên Hải', 'Thành phố Lào Cai', 'Tỉnh Lào Cai', '2023-04-15 13:34:26', '2023-04-16 13:09:42'),
(2, 2, '1180 Điện Biên Phủ', 'Phường Đa Kao', 'Quận 1', 'Thành phố Hồ Chí Minh', '2023-04-15 13:35:18', '2023-04-16 13:16:16'),
(3, 3, '180 Hoàng Văn Thụ', 'Phường Hoàng Văn Thụ', 'Thành phố Lạng Sơn', 'Tỉnh Lạng Sơn', '2023-04-15 13:35:45', '2023-04-16 13:12:28'),
(4, 4, '44 Phù Đổng', 'Phường Hoà Chung', 'Thành phố Cao Bằng', 'Tỉnh Cao Bằng', '2023-04-15 13:36:07', '2023-04-16 13:17:12'),
(5, 5, '80 Cách Mạng Tháng Tám', 'Phường Sông Cầu', 'Thành Phố Bắc Kạn', 'Tỉnh Bắc Kạn', '2023-04-15 13:39:20', '2023-04-16 13:17:59'),
(6, 6, '180 Cao Lỗ', 'Phường Phúc Xá', 'Quận Ba Đình', 'Thành phố Hà Nội', '2023-04-15 13:48:48', '2023-04-16 13:04:00'),
(7, 1, '384 Chiến Lược', 'Thị trấn Sơn Dương', 'Huyện Sơn Dương', 'Tỉnh Tuyên Quang', '2023-04-17 12:55:54', '2023-04-17 12:55:54'),
(8, 2, '180 chien luoc', 'Xã Phú Linh', 'Huyện Vị Xuyên', 'Tỉnh Hà Giang', '2023-04-18 11:37:11', '2023-04-18 11:37:11'),
(9, 4, '1', 'Xã Phúc Lộc', 'Huyện Ba Bể', 'Tỉnh Bắc Kạn', '2023-04-18 16:55:05', '2023-04-18 16:55:05'),
(10, 4, '2', 'Xã Sen Thượng', 'Huyện Mường Nhé', 'Tỉnh Điện Biên', '2023-04-18 16:55:13', '2023-04-18 16:55:13');

-- --------------------------------------------------------

--
-- Table structure for table `businesses`
--

CREATE TABLE `businesses` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `des` text,
  `benefit` text,
  `url` text,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `businesses`
--

INSERT INTO `businesses` (`id`, `name`, `phone`, `email`, `des`, `benefit`, `url`, `password`, `createdAt`, `updatedAt`) VALUES
(1, ' Toshiba Software Development (Viet Nam) Co, Ltd', '0902517741', 'nhansu@toshiba.com', 'duong nguyen co', '123123123', 'http://res.cloudinary.com/daek16exa/raw/upload/v1681627964/logo/business/%20Toshiba%20Software%20Development%20%28Viet%20Nam%29%20Co%2C%20Ltd', '$2b$10$W11uuumJcM9RWBbxOE4le.ef/4E0aAHuANREmyO9eXm/KEZXO8dZm', '2023-04-15 13:34:26', '2023-04-16 07:17:20'),
(2, ' MB Bank', '123', 'nhansu@mbbank.com', '123123', '123', 'http://res.cloudinary.com/daek16exa/raw/upload/v1681634118/logo/business/%20MB%20Bank', '$2b$10$PAscxbOA7GRS87cO7.FG/OJ1w3DoV183UesYo9Ow.Ffr6LKahe/Gy', '2023-04-15 13:35:18', '2023-04-16 08:35:18'),
(3, 'Mcredit - Công ty Tài chính TNHH MB Shinsei', '0909123321', 'nhansu@mcredit.com', 'asd', 'asd', 'http://res.cloudinary.com/daek16exa/raw/upload/v1681635230/logo/business/Mcredit%20-%20C%C3%B4ng%20ty%20T%C3%A0i%20ch%C3%ADnh%20TNHH%20MB%20Shinsei', '$2b$10$Vd00amvoU6uPFj881diEjuUtoz0Iv3TH5tiL3.2jlYE7IrTfzqsJC', '2023-04-15 13:35:45', '2023-04-16 08:53:49'),
(4, 'Titan Technology Corporation', '0901234234', 'nhansu@titan.com', 'asd', 'asd', 'http://res.cloudinary.com/daek16exa/raw/upload/v1681636848/logo/business/Titan%20Technology%20Corporation', '$2b$10$WzDZGikQonG.iUmn3cn.fuQsYaTgPiQtlzerJq1Ldy5VWKOTjd9PS', '2023-04-15 13:36:07', '2023-04-16 09:20:48'),
(5, 'mgm technology partners Vietnam', '0908123123', 'nhansu@mgm.com', 'asd', 'asd', 'http://res.cloudinary.com/daek16exa/raw/upload/v1681636944/logo/business/mgm%20technology%20partners%20Vietnam', '$2b$10$r5izospAom5CmhBbWcZP4O2jXlaiXfU5EvKWGuWJTdP0iA9w3bVtq', '2023-04-15 13:39:20', '2023-04-16 09:22:24'),
(6, ' TRUONG MINH THINH TECHNOLOGY JOINT STOCK COMPANY', '0902333333', 'nhansu@tmt.com', 'asd', 'asd', 'http://res.cloudinary.com/daek16exa/raw/upload/v1681637151/logo/business/%20TRUONG%20MINH%20THINH%20TECHNOLOGY%20JOINT%20STOCK%20COMPANY', '$2b$10$wjKTDE5t5CknTn3T5Xmsq.X69Ju6Lb4QV.IGwLU4AEdUGA2gBjjn.', '2023-04-15 13:48:48', '2023-04-16 09:25:50');

-- --------------------------------------------------------

--
-- Table structure for table `business_services`
--

CREATE TABLE `business_services` (
  `id_service` int NOT NULL,
  `id_business` int NOT NULL,
  `expire` bigint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `business_services`
--

INSERT INTO `business_services` (`id_service`, `id_business`, `expire`, `createdAt`, `updatedAt`) VALUES
(1, 1, 0, '2023-04-15 13:34:26', '2023-04-15 13:34:26'),
(1, 2, 0, '2023-04-15 13:35:18', '2023-04-15 13:35:18'),
(1, 3, 0, '2023-04-15 13:35:45', '2023-04-15 13:35:45'),
(1, 4, 0, '2023-04-15 13:36:07', '2023-04-15 13:36:07'),
(1, 5, 0, '2023-04-15 13:39:20', '2023-04-15 13:39:20'),
(1, 6, 0, '2023-04-15 13:48:48', '2023-04-15 13:48:48');

-- --------------------------------------------------------

--
-- Table structure for table `candidates`
--

CREATE TABLE `candidates` (
  `id` int NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `candidates`
--

INSERT INTO `candidates` (`id`, `first_name`, `last_name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Dương', 'Nguyên Cơ', 'duongnguyenco0103@gmail.com', '$2b$10$4rteJ0aKXBx3ZQTbYLTW0.MA1YLLsPW3IQjmu9F..Vie09VhWWp.6', '2023-04-15 16:04:15', '2023-04-15 16:04:15');

-- --------------------------------------------------------

--
-- Table structure for table `candi_busis`
--

CREATE TABLE `candi_busis` (
  `id_candidate` int NOT NULL,
  `id_business` float NOT NULL,
  `star` float NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `candi_posts`
--

CREATE TABLE `candi_posts` (
  `id_candidate` int NOT NULL,
  `id_post` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cvs`
--

CREATE TABLE `cvs` (
  `id` int NOT NULL,
  `id_candidate` int NOT NULL,
  `file` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cv_posts`
--

CREATE TABLE `cv_posts` (
  `id_post` int NOT NULL,
  `id_cv` int NOT NULL,
  `status` int DEFAULT '-1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

CREATE TABLE `discounts` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(6) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `email_tamplastes`
--

CREATE TABLE `email_tamplastes` (
  `id` int NOT NULL,
  `id_business` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int NOT NULL,
  `id_job_type` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `salary` int NOT NULL,
  `des` text NOT NULL,
  `request` text,
  `quantity` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `id_job_type`, `name`, `salary`, `des`, `request`, `quantity`, `createdAt`, `updatedAt`) VALUES
(1, 3, 'Technical Architect - .NET (HCM)', 8000000, 'Analyze and understand business and technical requirements; \nApply best practices to design, develop and maintain efficient, reusable and stable code; \nResponsible for designing and completing high quality products and meeting practical business and technical requirements; \nResponsible for key functional and technical areas; \nConduct unit and manual testing regularly and provide highly specialized solutions; \nResearch and build databases, analyze and provide requirements for general infrastructure architecture to ensure stability; \nConsult tech platforms in coordination with the System team to build and test Data center system; \nSupport and participate in the organization of training guides for members.', 'At least 8 years of experience strong at NET/.NET Core;\nDeep understanding of object-oriented programming and data modelling;\nAdvanced skills in Microservice architectures/models;\nExperienced in databases (MySQL, PostgreSQL, NoSQL) including performance tuning and optimization;\nExperienced in CI/CD and Software Testing;\nGood training/mentoring skills;\nGood problem-solving skills;\nGood learning attitude and growth mindset;\nWilling to work under stress;\nFluency in English. ', 3, '2023-04-15 13:51:42', '2023-04-15 13:51:42'),
(2, 4, 'Java Engineer', 45000000, 'Taking part in managing team of 5-to-10 members to develop, enhance software for Toshiba products and solutions. The team will use variety of common technologies from Web (full stack of Java .NET & multiple client technologies) and Desktop/Mobile application depends on each components’ requirement of complicated system. Based on customers’ requirement, there may be request of quick investigation of new & latest technology and implementing Demos/Prototypes.\n\nEstablishing estimation, proposing development solution with customer\nMaking project plan, monitoring and controlling project progress, complying company\'s process.\nDirecting project team in essential work tasks of software development (e.g., requirement definition, software design, implementation, testing)\nAccountable for success of the project in terms of Quality, Cost and Delivery.\nLeading and managing team to counter risk and issues during project execution.\nCommunicating and discussing directly with customer about requirement specifications.\nAccountable for continuously discovering, evaluating and implementing new technologies/process to optimize development efficiency or improve product quality.\nConduct training & coaching junior members in software engineering development if required.', 'Mandatory skill\n\nAt least 4 year experiences of Web system development (Java or others) with firm knowledge of software engineering (requirement, software design, programing, testing).\nAt least 1 year playing role of Team Leader/ Project management. Having experiences to manage multiple project teams at the same time is an advantage.\nAble to investigate & acquire quickly knowledge about system specification & technical insight.\nGood mindset in software structural design to assure reliability, maintainability, portability and efficiency of the source code.\nFamiliar with designing software using UML, Flow Chart.\nCan use English at work\nDisered Skills\n\nExperiences in development/deployment on the Cloud (AWS, Azure).\nKnowledge & practical apply of implementation of common design pattern (both architectural & detail)\nJapanese: JLPT certification or able to communicate in Japanese is big advantage.\nHave experience working in Japanese companies is an advantage.', 1, '2023-04-15 13:57:32', '2023-04-15 13:57:32'),
(3, 4, 'Angular Developer', 18400000, 'Investigate & gather knowledge of new technologies & new industrial business domain to determine software solution and/or conduct domain-specific software engineering.\nResponsible for implementing, customizing, maintaining & debugging software solution.\nContribute to test plan & test design; Responsible for developing & executing unit test cases if required.\nResponsible for product review on work done by team mates\nContribute in system integration, fixing of bugs reported by customer or testing team.', 'Education\n\nBachelor degree or Engineer degree in Information Technology, Electronic & Telecommunication, Computer Science, Math or related fields.\nMandatory Skills\n\n# Middle Level:\n\nHave at least 2 years hand-on experience with Angular\nFirm knowledge of computer science & software engineering\nHave ability to read and write documents in English.\n# Senior Level:\n\nBe proficient with JavaScript and deep understanding of how browsers work\nHave at least 05 years of hands-on experience with Angular\nBe Skillful in HTML, CSS\nExperience with: HTTP, API, REST, JSON, unit test, XSS, CSRF, sync vs. async, promise, immutability, pure function\nRequirement Analysis: Have ability to analyze and understand business and technical requirements.\nHave ability to read and write documents in English.\nDesired skills\n\nUnderstanding/experiences in development process is an advantage.\nTeam working, open minded, long-term commitment & self-motivated;\nGood inter-personal and communication skills with customers and project members;\nAdapt quickly with new domain, ready to work & study new technologies;\nAble to work under high pressure.\nAppropriate English language fluency, main focus on reading & writing', 2, '2023-04-15 14:08:03', '2023-04-15 14:08:03'),
(4, 2, 'Middleware Developer', 10000000, 'Directly involve in essential work of software/middle-ware development includes requirement definition, software design, implementation, unit testing\nCommunicate and discuss directly with customer about requirement specifications & design solution\nTake part in technical discussion & review', 'Bachelor/Engineer degree in Computer Science or equivalent experience in the software development field\nGood at C/C++ Programming, inter-process communication, memory allocation\nHave knowledge in Linux, shell script\nExperience in working with Git, Git Lab, database\nAble to investigate and analyze big source code', 2, '2023-04-15 14:13:13', '2023-04-15 14:13:13'),
(5, 2, 'Software Engineer', 20000000, 'Trust & Safety team at ZaloPay gather highly motivated team players who dedicate in building ZaloPay as the most trusted e-wallet and best against to bad actors in Vietnam fintech market. By developing and adapting advanced tech-driven prevention mechanisms/solutions while focusing on the user growth and customer experience, we aim to make risk management capability as a core and key differentiation of ZaloPay comparing to other competitors.\n\nWe are looking for a savvy, motivated, team-oriented  Software Engineer to join our Trust & Safety Platform team. The hire will be responsible for the full life-cycle in software development (e.g., design, implementation, testing, optimization, maintainance) of our Risk Decision Engine and its supportive risk evaluation components. This large-scale & high-availability platform must examinate all users on several steps of user journey to respond with low latency in real-time for the best on-time protection maximization.\n\nThe ideal candidate is an experienced solution builder who enjoys optimizing complicated systems or building them from the ground up.\n\nThe Engineer will work closely with our risk pillar owners, data engineers, machine learning engineers on new mechanism/solution initiatives and will ensure optimal system architecture is consistent throughout ongoing projects. They must be self-directed and comfortable supporting needs of multiple teams, systems and products.\n\nAs a Software Engineer in our team, you will have the opportunity to:\n \n\nWork closely with stakeholders including Policy & Operations, Data Science team members to identify any product/functionality gaps, build and collaborate internal products and technology teams to define the necessary development to support solution delivery;\nDesign and develop a robust, high-volume (thousand tps), low-latency (under 50ms), high-availability (zero downtime) backend platform with optimal software architecture;\nParticipate in complex architectural discussions that involve multiple systems/services;\nOwn implementation of modules/services/products, identify their bottlenecks, keep investing effort to maximize its quality and well prepare for scale-out readiness;\nEnsure the performance and quality of applications, moreover, your implementation must be reusable, testable, and efficient;\nPro-actively respond in identifying and troubleshooting integration or technical issues;\nWork with devops engineers to identify, design, or implement internal software development process enhancement: automating manual processes, optimizing CI/CD & infrastructure for greater scalability;\nWork with technical expert team of Vietnam\'s leading online payment application;\nChallenge the status when needed.', 'We are looking for a candidate with 2+ years of experience in a Back-end Software Engineer role, who has attained a Graduate degree in Computer Science, Statistics, Informatics, Information Systems or another quantitative field.\n\nPreferably, you should also have the following qualifications: Experience in object-oriented programming, multi-threading, web-service programming; Proficiency in the Java programming language;\nExperience in relational databases such as MySQL, Postgres, etc;\nExperience in using caching technologies Redis, Memcache;\nExperience with Git source control and effective branching and release management practices;\nStrong critical thinking skills - you will need to understand our challenges & opportunities and apply them to innovative software solutions;\nAbility to debug, diagnose and resolve complex Java bugs throughout the stack/tracing log;\nExperience in non-relational databases such as MongoDB, Cassandra, etc. is an advantage;\nBe able to work independently and as part of a team;\nA sense of ownership and a passion for delighting customers through innovation and creative solutions to sophisticated problems;\nGood communication skills in a collaborative environment; Understanding and implementation of security and data protection is a plus;\nDemonstrated ability to learn new technologies quickly.', 2, '2023-04-15 14:19:58', '2023-04-15 14:19:58'),
(6, 4, 'Kiểm toán viên Kiểm toán Công Nghệ Thông Tin', 30000000, 'Hỗ trợ xây dựng kế hoạch kiểm toán nội bộ về CNTT hàng năm\nThu thập, phân tích thông tin, đánh giá rủi ro, xây dựng thủ tục kiểm toán chi tiết theo phạm vi trách nhiệm được phân công\nTham gia các cuộc kiểm toán về CNTT theo cấp độ kiểm toán viên: Các chuyên đề CNTT; kiểm toán dự án IT, kiểm toán an ninh thông tin, kiểm toán hạ tầng công nghệ (mạng, máy chủ, các hệ điều hành, các hệ cơ sở dữ liệu, CAATs/SQL, kiểm toán ITGC, các chốt kiểm soát tự động,…), kiểm toán ứng dụng; các dịch vụ ngân hàng số…; đề xuất kiến nghị/khuyến nghị nhằm nâng cao hiệu quả các hoạt động/đơn vị được kiểm tra\nBáo cáo các phát hiện kiểm toán lên Trưởng nhóm/Trưởng đoàn KTNB và trao đổi thống nhất với nhân sự đơn vị được kiểm toán\nChịu trách nhiệm phối hợp theo dõi tình hình khắc phục các khuyến nghị kiểm toán đối với mảng phụ trách\nTham gia phát triển các công cụ, phần mềm và chương trình, thủ tục KTNB theo phân công; Xây dựng các chính sách và thủ tục kiểm toán liên quan đến CNTT; Hồ trợ xây dựng tài liệu hướng dẫn kiểm toán CNTT;\nThực hiện tham mưu, tư vấn, góp ý về việc ban hành các quy chế, chính sách, các hệ thống CNTT của MB theo phân công.\nThực hiện các nhiệm vụ khác theo phân công của Trưởng phòng hoặc BLĐ', 'Trình độ học vấn:\n\nCó trình độ Đại học trở lên chuyên ngành kinh tế, quản trị kinh doanh, luật, kế toán, CNTT\nKiến thức/Kinh nghiệm:\n\nCó kiến thức tốt về Kiểm toán CNTT: hạ tầng CNTT, thiết bị mạng, các hệ điều hành, cơ sở dữ liệu, an ninh thông tin; Dự án CNTT, SQL.\nƯu tiên nhân sự có chứng chỉ CISA/CISM/CISSP hoặc chứng chỉ khác liên quan\nCó ít nhất 02 năm kinh nghiệm về CNTT hoặc kiểm toán CNTT trong các tổ chức tài chính (ngân hàng, công ty tài chính…).\nAm hiểu các tiêu chuẩn về rủi ro và kiểm toán\nƯu tiên nhân sự đã có kinh nghiệm làm KTNB về CNTT tại các bank/kiểm toán độc lập tại Big4 đã có kinh nghiệm kiểm toán CNTT tại Ngân hàn\nKỹ năng và yêu cầu khác\n\nTOEIC 500 trở lên hoặc chứng chỉ tương đương\nCó khả năng sử dụng thành thành công cụ xử lý, phân tích dữ liệu như: SQL, Dashboard, VBA, Power BI, Python...\nCó kỹ năng giao tiếp tốt, hợp tác đối với khách hàng nội bộ và khách hàng bên ngoài\nCó khả năng làm việc nhóm, luôn hướng về mục tiêu và lợi ích chung của tổ chức.\nCó kỹ năng phân tích, tổng hợp báo cáo kết quả kiểm toán.', 1, '2023-04-15 14:22:03', '2023-04-15 14:22:03'),
(7, 2, 'Backend Developer', 20000000, 'Junior BackEnd Developer:\n\nLập trình, phát triển các hệ thống, ứng dụng của Ngân hàng.\nPhát triển hoặc phối hợp cùng các nhà cung cấp phát triển và triển khai các giải pháp CNTT.\nQuản lý, phát triển dịch vụ tích hợp với các hệ thống core như: T24, WAY4, BPM, CRM, CIC ...\nQuản lý, phát triển API trên API Gateway phục vụ tích hợp với các đối tác trong nước và quốc tế.\nNghiên cứu, thử nghiệm, triển khai áp dụng các xu hướng công nghệ mới vào việc phát triển: GraphQL, Docker Container (K8s), CICD, EventSourcing, CQRS, NoSQL ...\nDuy trì hoạt động của các sản phẩm dịch vụ trong phạm vi quản lý.\nSenior BackEnd Developer: Bổ sung các nhóm công việc sau:\n\nTham gia phân tích nghiệp vụ, đề xuất giải pháp, phương án triển khai nhằm cải tiến, nâng cao hiệu quả của các dự án trong quá trình làm việc.\nLên timeline công việc, chia tasks cho các thành viên trong nhóm, giám sát và hỗ trợ các thành viên hoàn thành đúng cam kết.\nDẫn dắt nhóm 03-06 nhân sự, giúp thành viên cùng phát triển và hoàn thành nhiệm vụ được giao', 'Yêu cầu chung:\n\nTốt nghiệp Đại học chính quy các chuyên ngành Công nghệ thông tin, Khoa học máy tính, Điện tử viễn thông, Công nghệ phần mềm, Hệ thống thông tin ... và/hoặc có chứng chỉ lập trình viên tương đương (Aptech Greenwich, ...).\nThành thạo tiếng Anh (TOEIC 450 trở lên hoặc tương đương).\nHiểu biết về quy trình phát triển phần mềm và quen thuộc với tư duy làm việc Agile.\nĐối với ứng viên Junior:\n\nTối thiểu 02 năm kinh nghiệm làm việc tại các công ty, dự án về lập trình BackEnd.\nThành thạo ít nhất 01 trong các ngôn ngữ BackEnd (VD: Java).\nThành thạo, làm việc tốt với Spring framework: Spring Core, Spring Security, Spring Boots.\nThành thạo ít nhất 01 trong các loại database: Oracle, SQLserver, PostgreSQL, Mongodb ...\nCó kinh nghiệm trong mảng tài chính ngân hàng là một lợi thế.\n​Đối với ứng viên Senior: Bổ sung các điều kiện:\n\nTối thiểu 03 năm kinh nghiệm làm việc tại các công ty, dự án về lập trình BackEnd; trong đó, tối thiểu 01 năm kinh nghiệm làm việc với microservices.\nCó kiến thức tốt về kiến trúc hệ thống; thông thuộc nhiều thiết kế phần mềm.\nHiểu biết sâu về các kỹ thuật/công nghệ: MySQL, Redis, MongoDB, PostgreSQL, Kafka …\nCó khả năng tuning performance của ứng dụng, hệ thống.\nCó kinh nghiệm phát triển, sử dụng cloud, FrontEnd là một lợi thế.', 5, '2023-04-15 14:23:31', '2023-04-15 14:23:31'),
(8, 3, 'PHP Developer', 23000000, 'We are looking for 03 PHP Developers (Laravel/JS, English) to join Titan Technology.\n\nRESPONSIBILITIES:\n\nPerform assigned tasks independently.\nEnsure the assigned tasks to be performed on-time and with high quality.\nInvestigate and analyze the requirements.\nCode, implement, unit test, maintain and troubleshoot web application.\nComply with established coding quality standard of the company.\nReview design/technical solutions/code.\nSupport creating system architecture.\nWeekly and/or on-demand report to supervisor.\nFollow the project and organization processes, policies and regulations.', 'REQUIREMENTS:\n\nDegree in IT or equivalent.\nAt least 02 years of work experience in PHP.\nExperience with any of PHP frameworks: Laravel, Symfony, Slim.\nAble to perform front-end task; should have experience with HTML, CSS, JavaScript, ReactJS\nPreferably both PHP and JavaScript experiences\nFluent in English is a MUST\nFamiliar with Docker, Git, GitLab.\nGood knowledge about software development life cycles.\nGood logical thinking.\nAble to learn new technologies quickly.\nHighly responsible in work, proactive, self-organized and good teamwork spirit.', 3, '2023-04-15 14:32:17', '2023-04-15 14:32:17'),
(9, 4, 'AI Engineer', 10000000, 'Xây dựng & triển khai các mô hình AI/ML để giải quyết các bài toán thực tế của doanh nghiệp\nTham gia xây dựng/tổ chức xây dựng các mô hình speech recognition, NLP, computer vision, và các sản phẩm AI khác\nÁp dụng các thuật toán AI/ML để phân tích dữ liệu và xây dựng mô hình\nTham gia xây dựng RESTful website service để cung cấp dịch vụ tích hợp API\nPhối hợp với đơn vị nghiệp vụ để hiện về quy trình/kiến thức nghiệp vụ để triển khai các giải pháp AI một cách tốt nhất\nQuản lý vận hành, tối ưu các mô hình AI/ML\nĐào tạo nhân sự cấp dưới', 'Tốt nghiệp Đại học trở lên chuyên ngành toán, CNTT, khoa học máy tính. Có trên 3 năm kinh nghiệm\nCó kiến thức về các thuật toán Machine Learning (classification, regression…), Neural Network (CNN, R-CNN, SSD…)\nThành thạo một trong các framework: Scikit-learn, Keras , Tensorflow, PyTorch…\nThành thạo một trong các ngôn ngữ lập trình Python, C, C++\nCó khả năng nghiên cứu công nghệ mới với nền tảng cấu trúc dữ liệu và Thuật toán tốt\nCó khả năng thích nghi với sự thay đổi và tự nghiên cứu', 2, '2023-04-15 14:34:06', '2023-04-15 14:34:06'),
(10, 2, 'front end', 1000000, 'test\ntest1\ntest2\ntest3', 'test\ntest1\ntest2\ntest3', 1, '2023-04-17 12:56:41', '2023-04-17 12:56:41'),
(11, 1, 'cong viec 1', 10000000, 'test', 'test', 10, '2023-04-18 11:38:00', '2023-04-18 11:38:00'),
(12, 3, 'công viec 2', 100000000, 'test\ntest\ntest\ntest\ntesttest\ntest\ntest', 'test\ntest\ntest\ntest\ntesttest\ntest\ntest\n', 123, '2023-04-18 16:54:25', '2023-04-18 16:54:25'),
(13, 2, 'test3', 12000000, 'test1\ntest\ntest\ntesttest\ntest\ntest', 'test\ntest\ntest\ntest\ntest\ntest\ntest\ntest\ntest', 123, '2023-04-18 16:55:52', '2023-04-18 16:55:52'),
(14, 1, 'kiem toan thong tin', 1, '1\n1\n1\n1\n1\n1\n1\n1\n', '1\n1\n1\n1\n1\n1\n1\n1\n', 10, '2023-04-19 02:51:14', '2023-04-19 02:51:14'),
(15, 1, 'Kiểm toán thông tin liên lạc', 123, '1\n1\n1\n1\n1\n1\n1\n', '1\n1\n1\n1\n1\n1\n1\n1\n', 10, '2023-04-19 02:53:27', '2023-04-19 02:53:27'),
(16, 5, 'test10', 1000000, '1\n2\n3\n4\n5\n6\n7\n8\n9\n10', '1\n2\n3\n4\n5\n6\n7\n8\n9\n10', 10, '2023-04-19 14:08:00', '2023-04-19 14:08:00');

-- --------------------------------------------------------

--
-- Table structure for table `job_addresses`
--

CREATE TABLE `job_addresses` (
  `id_job` int NOT NULL,
  `id_address` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `job_addresses`
--

INSERT INTO `job_addresses` (`id_job`, `id_address`, `createdAt`, `updatedAt`) VALUES
(1, 6, '2023-04-15 13:51:42', '2023-04-15 13:51:42'),
(2, 1, '2023-04-15 13:57:32', '2023-04-15 13:57:32'),
(3, 1, '2023-04-15 14:08:03', '2023-04-15 14:08:03'),
(4, 1, '2023-04-15 14:13:13', '2023-04-15 14:13:13'),
(5, 1, '2023-04-15 14:19:58', '2023-04-15 14:19:58'),
(6, 2, '2023-04-15 14:22:03', '2023-04-15 14:22:03'),
(7, 2, '2023-04-15 14:23:31', '2023-04-15 14:23:31'),
(8, 4, '2023-04-15 14:32:17', '2023-04-15 14:32:17'),
(9, 3, '2023-04-15 14:34:06', '2023-04-15 14:34:06'),
(10, 1, '2023-04-17 12:56:42', '2023-04-17 12:56:42'),
(10, 7, '2023-04-17 12:56:42', '2023-04-17 12:56:42'),
(11, 2, '2023-04-18 11:38:00', '2023-04-18 11:38:00'),
(11, 8, '2023-04-18 11:38:00', '2023-04-18 11:38:00'),
(12, 4, '2023-04-18 16:54:25', '2023-04-18 16:54:25'),
(13, 4, '2023-04-18 16:55:53', '2023-04-18 16:55:53'),
(13, 9, '2023-04-18 16:55:53', '2023-04-18 16:55:53'),
(13, 10, '2023-04-18 16:55:53', '2023-04-18 16:55:53'),
(14, 5, '2023-04-19 02:51:15', '2023-04-19 02:51:15'),
(15, 5, '2023-04-19 02:53:27', '2023-04-19 02:53:27'),
(16, 7, '2023-04-19 14:08:00', '2023-04-19 14:08:00');

-- --------------------------------------------------------

--
-- Table structure for table `job_languages`
--

CREATE TABLE `job_languages` (
  `id_job` int NOT NULL,
  `id_language` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `job_languages`
--

INSERT INTO `job_languages` (`id_job`, `id_language`, `createdAt`, `updatedAt`) VALUES
(1, 5, '2023-04-15 13:51:42', '2023-04-15 13:51:42'),
(1, 16, '2023-04-15 13:51:42', '2023-04-15 13:51:42'),
(2, 21, '2023-04-15 13:57:32', '2023-04-15 13:57:32'),
(3, 13, '2023-04-15 14:08:03', '2023-04-15 14:08:03'),
(3, 19, '2023-04-15 14:08:03', '2023-04-15 14:08:03'),
(3, 34, '2023-04-15 14:08:03', '2023-04-15 14:08:03'),
(4, 2, '2023-04-15 14:13:13', '2023-04-15 14:13:13'),
(5, 21, '2023-04-15 14:19:58', '2023-04-15 14:19:58'),
(5, 25, '2023-04-15 14:19:58', '2023-04-15 14:19:58'),
(6, 5, '2023-04-15 14:22:03', '2023-04-15 14:22:03'),
(6, 8, '2023-04-15 14:22:03', '2023-04-15 14:22:03'),
(7, 5, '2023-04-15 14:23:31', '2023-04-15 14:23:31'),
(7, 10, '2023-04-15 14:23:31', '2023-04-15 14:23:31'),
(7, 21, '2023-04-15 14:23:31', '2023-04-15 14:23:31'),
(8, 7, '2023-04-15 14:32:17', '2023-04-15 14:32:17'),
(8, 22, '2023-04-15 14:32:17', '2023-04-15 14:32:17'),
(8, 28, '2023-04-15 14:32:17', '2023-04-15 14:32:17'),
(9, 2, '2023-04-15 14:34:06', '2023-04-15 14:34:06'),
(9, 8, '2023-04-15 14:34:06', '2023-04-15 14:34:06'),
(10, 1, '2023-04-17 12:56:42', '2023-04-17 12:56:42'),
(11, 2, '2023-04-18 11:38:00', '2023-04-18 11:38:00'),
(11, 5, '2023-04-18 11:38:00', '2023-04-18 11:38:00'),
(11, 6, '2023-04-18 11:38:00', '2023-04-18 11:38:00'),
(12, 3, '2023-04-18 16:54:25', '2023-04-18 16:54:25'),
(12, 4, '2023-04-18 16:54:25', '2023-04-18 16:54:25'),
(12, 8, '2023-04-18 16:54:25', '2023-04-18 16:54:25'),
(13, 4, '2023-04-18 16:55:53', '2023-04-18 16:55:53'),
(13, 6, '2023-04-18 16:55:53', '2023-04-18 16:55:53'),
(13, 8, '2023-04-18 16:55:53', '2023-04-18 16:55:53'),
(14, 1, '2023-04-19 02:51:15', '2023-04-19 02:51:15'),
(14, 4, '2023-04-19 02:51:15', '2023-04-19 02:51:15'),
(14, 6, '2023-04-19 02:51:15', '2023-04-19 02:51:15'),
(15, 3, '2023-04-19 02:53:27', '2023-04-19 02:53:27'),
(16, 3, '2023-04-19 14:08:00', '2023-04-19 14:08:00');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'APS.NET', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(2, 'C++', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(3, 'DevOps', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(4, 'JQuery', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(5, 'MySQL', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(6, 'NoSQL', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(7, 'PHP', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(8, 'Python', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(9, 'Rupy', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(10, 'Spring', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(11, 'Android', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(12, 'C#', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(13, 'HTML5', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(14, 'Magento', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(15, 'JSON', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(16, '.NET', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(17, 'PostgreSQL', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(18, 'Unity', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(19, 'Angular', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(20, 'IOS', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(21, 'Java', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(22, 'JavaScript', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(23, 'Kotlin', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(24, 'OOP', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(25, 'ReactJS', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(26, 'Swift', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(27, 'VueJS', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(28, 'Laravel', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(29, 'NodeJS', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(30, 'Oracle', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(31, 'React Native', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(32, 'TypeScript', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(33, 'Wordpress', '2023-03-13 13:27:59', '2023-03-13 13:27:59'),
(34, 'CSS3', '2023-04-15 14:06:19', '2023-04-15 14:06:19');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int NOT NULL,
  `id_business` int NOT NULL,
  `id_job` int NOT NULL,
  `expire` datetime DEFAULT NULL,
  `step1` int DEFAULT NULL,
  `step2` int DEFAULT NULL,
  `step3` int DEFAULT NULL,
  `step4` int DEFAULT NULL,
  `step5` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `id_business`, `id_job`, `expire`, `step1`, `step2`, `step3`, `step4`, `step5`, `createdAt`, `updatedAt`) VALUES
(1, 6, 1, '2023-05-15 13:52:04', 0, 1, 2, 2, 2, '2023-04-15 13:52:04', '2023-04-15 13:52:04'),
(2, 1, 2, '2023-05-15 13:57:41', 0, 1, 1, 2, 2, '2023-04-15 13:57:41', '2023-04-15 13:57:41'),
(3, 1, 3, '2023-05-15 14:08:09', 0, 1, 1, 2, 1, '2023-04-15 14:08:09', '2023-04-15 14:08:09'),
(4, 1, 4, '2023-05-15 14:13:15', 0, 0, 0, 0, 0, '2023-04-15 14:13:15', '2023-04-15 14:13:15'),
(5, 1, 5, '2023-05-15 14:20:00', 0, 0, 0, 0, 0, '2023-04-15 14:20:00', '2023-04-15 14:20:00'),
(6, 2, 6, '2023-05-15 14:22:04', 0, 0, 0, 0, 0, '2023-04-15 14:22:04', '2023-04-15 14:22:04'),
(7, 2, 7, '2023-05-15 14:23:34', 0, 0, 0, 0, 0, '2023-04-15 14:23:34', '2023-04-15 14:23:34'),
(8, 4, 8, '2023-05-15 14:32:19', 0, 0, 0, 0, 0, '2023-04-15 14:32:19', '2023-04-15 14:32:19'),
(9, 3, 9, '2023-05-15 14:34:11', 0, 0, 0, 0, 0, '2023-04-15 14:34:11', '2023-04-15 14:34:11'),
(10, 1, 10, '2023-05-17 12:56:47', 0, 0, 0, 0, 0, '2023-04-17 12:56:47', '2023-04-17 12:56:47'),
(11, 2, 11, '2023-05-18 11:38:24', 1, 1, 2, 2, 0, '2023-04-18 11:38:25', '2023-04-18 11:38:25'),
(12, 4, 12, '2023-05-18 16:54:27', 0, 0, 0, 0, 0, '2023-04-18 16:54:27', '2023-04-18 16:54:27'),
(13, 4, 13, '2023-05-18 16:55:55', 0, 0, 0, 0, 0, '2023-04-18 16:55:56', '2023-04-18 16:55:56'),
(14, 5, 14, '2023-05-19 02:51:18', 0, 0, 0, 0, 0, '2023-04-19 02:51:18', '2023-04-19 02:51:18'),
(15, 5, 15, '2023-05-19 02:53:30', 0, 0, 0, 0, 0, '2023-04-19 02:53:31', '2023-04-19 02:53:31'),
(16, 1, 16, '2023-05-19 14:08:22', 0, 0, 0, 0, 0, '2023-04-19 14:08:23', '2023-04-19 14:08:23');

-- --------------------------------------------------------

--
-- Table structure for table `post_services`
--

CREATE TABLE `post_services` (
  `id_service` int NOT NULL,
  `id_post` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `post_services`
--

INSERT INTO `post_services` (`id_service`, `id_post`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2023-04-15 13:52:09', '2023-04-15 13:52:09'),
(1, 2, '2023-04-15 13:57:45', '2023-04-15 13:57:45'),
(1, 3, '2023-04-15 14:08:12', '2023-04-15 14:08:12'),
(1, 4, '2023-04-15 14:13:17', '2023-04-15 14:13:17'),
(1, 5, '2023-04-15 14:20:06', '2023-04-15 14:20:06'),
(1, 6, '2023-04-15 14:22:06', '2023-04-15 14:22:06'),
(1, 7, '2023-04-15 14:23:36', '2023-04-15 14:23:36'),
(1, 8, '2023-04-15 14:32:21', '2023-04-15 14:32:21'),
(1, 9, '2023-04-15 14:34:13', '2023-04-15 14:34:13'),
(1, 10, '2023-04-17 12:56:51', '2023-04-17 12:56:51'),
(1, 11, '2023-04-18 11:39:16', '2023-04-18 11:39:16'),
(1, 12, '2023-04-18 16:54:31', '2023-04-18 16:54:31'),
(1, 13, '2023-04-18 16:55:59', '2023-04-18 16:55:59'),
(1, 14, '2023-04-19 02:51:25', '2023-04-19 02:51:25'),
(1, 15, '2023-04-19 02:53:37', '2023-04-19 02:53:37');

-- --------------------------------------------------------

--
-- Table structure for table `receipts`
--

CREATE TABLE `receipts` (
  `id` int NOT NULL,
  `id_discount` int NOT NULL,
  `id_service` int NOT NULL,
  `id_business` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('migration-address.js'),
('migration-business_service.js'),
('migration-business.js'),
('migration-candi_busi.js'),
('migration-candi_post.js'),
('migration-candidate.js'),
('migration-cv_post.js'),
('migration-cv.js'),
('migration-discount.js'),
('migration-email_tamplates.js'),
('migration-job_address.js'),
('migration-job_language.js'),
('migration-job.js'),
('migration-language.js'),
('migration-post_service.js'),
('migration-post.js'),
('migration-receipt.js'),
('migration-service.js'),
('migration-typejob.js');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `type_service` int NOT NULL,
  `price` int NOT NULL,
  `new_post` tinyint(1) NOT NULL,
  `hot_post` tinyint(1) DEFAULT NULL,
  `count_post` int NOT NULL,
  `expire` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `name`, `type_service`, `price`, `new_post`, `hot_post`, `count_post`, `expire`, `createdAt`, `updatedAt`) VALUES
(1, 'Gói cơ bản', 0, 0, 1, 0, 2, 2147483647, '2023-04-11 16:23:39', '2023-04-11 16:23:39'),
(2, 'Bài Đăng HOT', 1, 500000, 1, 1, 0, 2592000, '2023-04-11 16:24:59', '2023-04-11 16:24:59');

-- --------------------------------------------------------

--
-- Table structure for table `typejobs`
--

CREATE TABLE `typejobs` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `typejobs`
--

INSERT INTO `typejobs` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Internship', '2023-03-13 12:55:17', '2023-03-13 12:55:17'),
(2, 'Fresher', '2023-03-13 12:55:17', '2023-03-13 12:55:17'),
(3, 'Junior', '2023-03-13 12:55:17', '2023-03-13 12:55:17'),
(4, 'Senior', '2023-03-13 12:55:17', '2023-03-13 12:55:17'),
(5, 'Manager', '2023-03-13 12:55:17', '2023-03-13 12:55:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `businesses`
--
ALTER TABLE `businesses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_services`
--
ALTER TABLE `business_services`
  ADD PRIMARY KEY (`id_service`,`id_business`);

--
-- Indexes for table `candidates`
--
ALTER TABLE `candidates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `candi_busis`
--
ALTER TABLE `candi_busis`
  ADD PRIMARY KEY (`id_candidate`,`id_business`);

--
-- Indexes for table `candi_posts`
--
ALTER TABLE `candi_posts`
  ADD PRIMARY KEY (`id_candidate`,`id_post`);

--
-- Indexes for table `cvs`
--
ALTER TABLE `cvs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cv_posts`
--
ALTER TABLE `cv_posts`
  ADD PRIMARY KEY (`id_post`,`id_cv`);

--
-- Indexes for table `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `email_tamplastes`
--
ALTER TABLE `email_tamplastes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_addresses`
--
ALTER TABLE `job_addresses`
  ADD PRIMARY KEY (`id_job`,`id_address`);

--
-- Indexes for table `job_languages`
--
ALTER TABLE `job_languages`
  ADD PRIMARY KEY (`id_job`,`id_language`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post_services`
--
ALTER TABLE `post_services`
  ADD PRIMARY KEY (`id_service`,`id_post`);

--
-- Indexes for table `receipts`
--
ALTER TABLE `receipts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `typejobs`
--
ALTER TABLE `typejobs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `businesses`
--
ALTER TABLE `businesses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `candidates`
--
ALTER TABLE `candidates`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cvs`
--
ALTER TABLE `cvs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `discounts`
--
ALTER TABLE `discounts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `email_tamplastes`
--
ALTER TABLE `email_tamplastes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `receipts`
--
ALTER TABLE `receipts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `typejobs`
--
ALTER TABLE `typejobs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
