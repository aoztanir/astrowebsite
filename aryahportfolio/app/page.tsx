'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Building,
  Camera,
  CameraRotate,
  GraduationCap,
  Handshake,
  RocketLaunch,
} from '@phosphor-icons/react';
import {
  Avatar,
  BackgroundImage,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Divider,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
  useComputedColorScheme,
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import PhotographySection from '@/components/HomePage/Photography/PhotographySection';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  const router = useRouter();
  const { hovered: portfolioHovered, ref: portfolioHoveredRef } = useHover();

  const { hovered: photographyHovered, ref: photographyHoveredRef } = useHover();
  const computedColorScheme = useComputedColorScheme();

  return (
    <>
      {/* <ColorSchemeToggle /> */}

      <SimpleGrid cols={{ sm: 1, md: 2 }} mih="99vh">
        <Group
          h="100%"
          // bg={computedColorScheme === 'dark' ? 'dark.9' : 'gray.1'}
          p="50px"
          onClick={() => router.push('/portfolio')}
          className="home-page-hover"
          ref={portfolioHoveredRef}
          style={{ cursor: 'pointer' }}
        >
          <Box>
            <Flex align="center" gap="md" mt="xs" ml="auto" mr="auto" w="fit-content">
              <Box>
                <Avatar
                  size="200px"
                  mx="auto"
                  src="https://media.licdn.com/dms/image/v2/D5603AQEZKIgVrAd3qA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730755326334?e=1736380800&v=beta&t=46i02vxVSwTgJaXaLdC3uNU5Mz08bPUXI0HhOJ1l7IY"
                  className={portfolioHovered ? 'home-page-hover' : ''}
                  style={{ transition: 'transform 0.3s ease' }}
                ></Avatar>
              </Box>
              <Box>
                <Title order={1} fz="40" ta="left" className="artsy-text" fw="900">
                  Aryah Oztanir
                </Title>
                <Text fz={{ md: 'xs', lg: '20' }} ta="left" fw="500" mt="sm">
                  Founder | Consultant | Full-Stack Developer | College Student | Photographer
                </Text>
                <Button
                  radius="lg"
                  size="md"
                  mt="md"
                  bg="var(--custom-contrast-color)"
                  c="var(--custom-contrast-color-text)"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push('/photography');
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  Photography
                </Button>
              </Box>
            </Flex>
            <Box>
              <SimpleGrid cols={2} spacing="xl" mt="50px">
                <PortfolioCard
                  title="Education"
                  description="Morehead-Cain Scholar at UNC—Chapel Hill"
                  icon={<GraduationCap size="30px" weight="fill" />}
                  content={
                    <Text fz="sm" ta="left" mt="md">
                      Computer Science (B.S.), Business Adminstration (B.S.)
                    </Text>
                  }
                  portfolioHovered={portfolioHovered}
                ></PortfolioCard>
                <PortfolioCard
                  title="Founder"
                  description="KlubSpace: club management reimagined"
                  icon={<RocketLaunch size="30px" />}
                  content={
                    <Text fz="sm" ta="left" mt="md">
                      Early stage startup. Pilotting with 15 clubs in 2025
                    </Text>
                  }
                  portfolioHovered={portfolioHovered}
                ></PortfolioCard>
                <PortfolioCard
                  title="Developer"
                  description="Making fundraisers easy and accessible "
                  icon={<Handshake size="30px" />}
                  content={
                    <Text fz="sm" ta="left" mt="md">
                      Driving business for restaurants by connecting them with consumers that want
                      to fundraise
                    </Text>
                  }
                  portfolioHovered={portfolioHovered}
                ></PortfolioCard>
                <PortfolioCard
                  title="Photographer"
                  description="Street, portraitrure, landscape, travel, artistic  "
                  icon={<CameraRotate size="30px" />}
                  content={
                    <Text fz="sm" ta="left" mt="md">
                      Photography business, portfolio, and work
                    </Text>
                  }
                  portfolioHovered={portfolioHovered}
                ></PortfolioCard>
              </SimpleGrid>
            </Box>
            <Group mt="50" ml="auto" mr="auto">
              <Button
                ml="auto"
                mr="auto"
                size="lg"
                radius="lg"
                bg="var(--custom-contrast-color)"
                c="var(--custom-contrast-color-text)"
                // className={portfolioHovered ? 'home-page-hover' : ''}
                // style={{ transition: 'transform 0.3s ease' }}
              >
                Learn more
              </Button>
            </Group>
          </Box>
        </Group>

        <Box
          visibleFrom="md"
          w="49vw"
          mah="100vh"
          p="xl"
          style={{ position: 'relative', cursor: 'pointer' }}
          ref={photographyHoveredRef}
          bg="transparent"
          onClick={() => router.push('/photography')}
        >
          <Box
            w="100%"
            style={{
              // position: 'absolute',
              // zIndex: 1,
              // top: '50%',
              // left: '50%',
              // transform: 'translate(-50%, -50%)',
              opacity: 1,
            }}
          >
            <Flex gap="md" align="center" w="fit-content" w="100%">
              <Box>
                <Flex align="center" gap="md" w="fit-content">
                  <Camera size="50px" weight="bold" />
                  <Title
                    order={1}
                    fz="50"
                    ta="center"
                    // fw="900"
                    // mt="xl"
                    // className="ransom-note-font"
                    className="artsy-text"
                    opacity={1}
                  >
                    Photography
                  </Title>
                </Flex>
                {/* <Text fz="md" ta="center" mt="md" className="" fw="400">
              Capturing the beauty of the world around us.
            </Text> */}
                {/* <Text fz="xl" ta="center" mt="md" className="" fw="400" c={'dimmed'}> */}
                <Group mt="md">
                  <Badge radius="md" variant="light" tt={'none'} size="lg" color="indigo.9">
                    Business
                  </Badge>
                  <Badge radius="md" variant="light" tt={'none'} size="lg" color="red.4">
                    Portraits
                  </Badge>
                  <Badge radius="md" variant="light" tt={'none'} size="lg" color="violet.9">
                    Event Photography
                  </Badge>
                  <Badge radius="md" variant="light" tt={'none'} size="lg" color="teal.4">
                    More
                  </Badge>
                </Group>
                {/* Business | Portraits | Event Photography | More */}
                {/* </Text> */}
              </Box>
              <Card ml="auto" mr="0" shadow="xl" radius="lg" p="0">
                <Image
                  height={120}
                  src="https://images.squarespace-cdn.com/content/v1/579bbd35b3db2bfbd63eb3ae/99cd7036-6fd1-49cb-be8d-da9106d08885/kodakgold200120film-2.jpg"
                />
              </Card>
            </Flex>
          </Box>
          <Box
            mt="xl"
            className={photographyHovered ? 'home-page-hover fade-bottom' : 'fade-bottom'}
            mah="700px"
            style={{
              transition: 'transform 0.3s ease',
              overflow: 'hidden',
              position: 'relative',
              // top: '50%',
              // transform: 'translateY(-50%)',
            }}
            // p="xl"
            // my="auto"
          >
            <PhotographySection mx="auto" w="100%" />
          </Box>
          <Button
            mx={'auto'}
            mt="xl"
            size="lg"
            radius="lg"
            bg="var(--custom-contrast-color)"
            c="var(--custom-contrast-color-text)"
            style={{
              transition: 'transform 0.3s ease',
              position: 'absolute',
              left: 0,
              bottom: 0,

              bottom: '5%',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            See more
          </Button>
        </Box>
      </SimpleGrid>
    </>
  );
}

const PortfolioCard = ({ title, description, icon, content, portfolioHovered }) => {
  return (
    <Card
      shadow="xl"
      radius="lg"
      withBorder
      className={portfolioHovered ? 'home-page-hover' : ''}
      style={{ transition: 'transform 0.3s ease' }}
    >
      <Flex gap="xs" align="center">
        {icon}
        <Text fw="bold" fz="lg" className="artsy-text" fw="900">
          {title}
        </Text>
      </Flex>
      <Title order={3} fz="md" ta="left" fw="500" mt="sm">
        {description}
      </Title>

      {content}
    </Card>
  );
};
