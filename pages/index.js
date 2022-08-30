import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import thumbYouTube from "../public/images/links/youtube.png";
import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png";
import Image from "next/image";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop)
});

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Hi mọi người, em là một người yêu công nghệ sống tại Đà Lạt hihi!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nguyễn Đức Hùng
          </Heading>
          <p>Sở thích : Công nghệ, máy tính, yêu cái đẹp và thích đi di lịch</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/duchung.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Về Công việc
        </Heading>
        <Paragraph>
          Em là mới học lập trình nên kinh nghiệm còn rất thiếu, em có tính vọc
          vạch nên cũng học làm theo được 1 con web như ý của mình đó là{" "}
          <NextLink
            href="https://pt398p.csb.app/?fbclid=IwAR2RyqrTk1KvQ3NatxVbMp8bixCUUUS8u8AhRUzA2hg3rEVfUBF9ERIQXFE"
            passHref
            scroll={false}
          >
            <Link>duchung.edu.vn</Link>
          </NextLink>
          . Ngoài ra em còn có các kênh phổ biến hiện nay như Medium &quot;
          <NextLink href="https:/medium0.com/@duchung13" passHref>
            <Link target="_blank">@duchung138</Link>
          </NextLink>
          &quot;, Twitter &quot;
          <NextLink href="https://twitter.com/duchung138" passHref>
            <Link target="_blank">@duchung138</Link>
          </NextLink>
          &quot;, Youtube : &quot;
          <NextLink
            href="https://www.youtube.com/channel/UCoeZHmeobYiOcOkNFvvejUQ"
            passHref
          >
            <Link target="_blank">hùng đức</Link>
          </NextLink>
          &quot;, Tiktok : &quot;
          <NextLink href="https://www.tiktok.com/@duchungg13" passHref>
            <Link target="_blank">Tiktok của Đức Hùng</Link>
          </NextLink>
          &quot;
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Giới thiệu về bản thân
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Sinh ra ở Thành phố Hồ Chí Minh.
        </BioSection>
        <BioSection>
          <BioYear>2008</BioYear>
          Học cấp 1 tại trường Đoàn Thị Điểm (Đà Lạt).
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Học cấp 2 tại trường Tây Sơn (Đà Lạt).
        </BioSection>
        <BioSection>
          <BioYear>2016 đến 2020</BioYear>
          Học cấp 3 tại trường Bùi Thị Xuân (Đà Lạt).
        </BioSection>
        <BioSection>
          <BioYear>2020 đến hiện tại</BioYear>
          Học tại trường Đại học Đà Lạt.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Các trang web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/duchung13" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @duchung13
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/duchung138" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @duchung138
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/hungduc138/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @hungduc138
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
