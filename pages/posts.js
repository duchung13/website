import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbshare from "../public/images/contents/tropicolour.jpg";
import thumbreviewcompressimage from "../public/images/contents/compressimage.jpg";
import thumbreviewinkdrop from "../public/images/contents/inkdrop.jpg";
import thumbmyworkfromhome from "../public/images/contents/myworkfromhome.jpg";
import thumbweb from "../public/images/contents/web.jpg";
import thumbweb1 from "../public/images/contents/web1.jpg";
import thumbreviewkeyviz from "../public/images/contents/keyviz.jpg";
import thumbpersonal from "../public/images/contents/duchung.jpg";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Bài viết phổ biến
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Chia sẻ FILM BURNS VOL. 2 FX & TRANSITIONS trị giá 39$
            "
            thumbnail={thumbshare}
            href="https://www.facebook.com/Nguyenduchung1382/posts/pfbid0KzHGQx5Pbta2E3q5xWH9Hv1EYimGUBRidmX8UsA2czo9ai4PqmMVi5GSk3EsJepMl"
          />
          <GridItem
            title="Review Compressimage dùng để giảm kích thước ảnh"
            thumbnail={thumbreviewcompressimage}
            href="https://medium0.com/@duchung13/review-compressimage-io-8005afa723e7"
          />
          <GridItem
            title="Chia sẻ về ứng dụng Inkdrop (markdow)"
            thumbnail={thumbreviewinkdrop}
            href="https://www.youtube.com/watch?v=XrQHjTqcrg0&t=1s"
          />
          <GridItem
            title="Góc làm việc của mình"
            thumbnail={thumbmyworkfromhome}
            href="https://www.facebook.com/photo.php?fbid=541233581060971&set=pb.100055230014161.-2207520000..&type=3"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Đây là trang web đầu tiên mình học và làm theo anh người Nhật hihi"
            thumbnail={thumbweb}
            href="https://www.youtube.com/watch?v=p7P0zyhe3CE&t=11s"
          />
          <GridItem
            title="Đây là cũng là trang web mình rất ưng ý khi làm theo anh devaslife"
            thumbnail={thumbweb1}
            href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Review Keyviz"
            thumbnail={thumbreviewkeyviz}
            href="https://www.youtube.com/watch?v=jybJrEIuqlA&t=11s"
          />
          <GridItem
            title="Đây là mình hihi!"
            thumbnail={thumbpersonal}
            href="https://www.facebook.com/photo.php?fbid=546665300517799&set=pb.100055230014161.-2207520000..&type=3"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
export { getServerSideProps } from "../components/chakra";
