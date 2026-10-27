export type MapPin = {
  id: string;
  name: string;
  sub?: string; // "2대", "1대" 같은 회색 보조 텍스트
  type: 'elevator' | 'stair';
  x: number; // viewBox 좌표
  y: number; // viewBox 좌표
  labelPosition: 'left' | 'right' | 'below';
};

export type MapEntrance = {
  label: string;
  x: number;
  y: number;
};

export type RouteDummy = {
  id: string;
  type: 'stairs' | 'elevator';
  name: string;
  seconds: number; // 더미 소요시간(초)
  status?: '여유' | '쏘쏘' | '빡빡'; // 엘리베이터 혼잡도 더미
};

export const BUILDING_MAP_DATA: Record<string, {
  elevatorBadge: string;
  stairBadge: string;
  svgPath: string;
  viewBox: string;
  pins: MapPin[];
  entrances?: MapEntrance[];
  routes: RouteDummy[];
}> = {
  '김수환관': {
    elevatorBadge: '엘리베이터 2곳 · 4대',
    stairBadge: '계단 3곳',
    svgPath: 'M31.85 15.65L30.95 38.15L20.15 39.95L21.05 83.15L20.15 91.25L13.85 93.95L10.25 129.05H37.25L39.95 131.75V148.85L37.25 151.55H3.05001L1.25001 161.45L150.65 162.35L151.55 208.25H156.95L159.65 196.55L170.45 193.85V151.55L185.75 149.75L191.15 178.55L189.35 203.75L260.45 205.55L275.65 199.25L284.65 160.55L290.15 112.85L281.15 111.95L282.05 102.05L260.45 77.75L229.75 76.85L228.05 72.35H210.05L205.55 77.75H199.25L197.45 99.35L191.15 102.95L188.45 112.85H179.45L177.65 5.75H148.75L139.75 1.25L96.65 3.05L93.05 12.05L37.25 11.15L35.45 15.65H31.85ZM63.35 129.05L82.25 130.85L81.35 151.55L60.65 149.75L63.35 129.05ZM111.95 75.95L135.35 76.85L138.05 80.45L137.15 110.15L133.55 112.85H111.95L109.25 109.25L111.95 75.95ZM80.45 39.95L82.25 91.25L73.25 94.85L51.65 95.75L48.95 93.05L48.05 42.65L80.45 39.95Z',
    viewBox: '0 0 292 210',
    pins: [
      { id: '1', name: '좌측', type: 'stair', x: 98, y: 105, labelPosition: 'left' },
      { id: '2', name: '기숙사', sub: '2대', type: 'elevator', x: 135, y: 146, labelPosition: 'left' },
      { id: '3', name: '메인', sub: '2대', type: 'elevator', x: 239, y: 82, labelPosition: 'left' },
      { id: '4', name: '우측', type: 'stair', x: 213, y: 143, labelPosition: 'right' },
      { id: '5', name: '신데렐라', type: 'stair', x: 181, y: 196, labelPosition: 'left' },
    ],
    entrances: [
      { label: '입구', x: 94, y: 176 },
      { label: '입구', x: 243, y: 218 },
    ],
    routes: [
      { id: 'k1', type: 'stairs', name: '좌측 계단', seconds: 35 },
      { id: 'k2', type: 'stairs', name: '우측 계단', seconds: 40 },
      { id: 'k3', type: 'stairs', name: '신데렐라 계단', seconds: 55 },
      { id: 'k4', type: 'elevator', name: '기숙사 엘리베이터', seconds: 70, status: '여유' },
      { id: 'k5', type: 'elevator', name: '메인 엘리베이터', seconds: 180, status: '쏘쏘' },
    ],
  },
  '마리아관': {
    elevatorBadge: '엘리베이터 1곳 · 2대',
    stairBadge: '계단 1곳',
    svgPath: 'M1.25 1.25L3.65 291.65L6.05 295.25L33.65 296.45L93.65 295.25L94.85 237.65L61.25 241.25L60.05 199.25L66.05 195.65L67.25 150.05L66.05 145.25L49.25 141.65L60.05 86.45L45.65 81.65V1.25H1.25Z',
    viewBox: '0 0 97 298',
    pins: [
      { id: '1', name: '메인', sub: '2대', type: 'elevator', x: 55, y: 135, labelPosition: 'right' },
      { id: '2', name: '메인', type: 'stair', x: 55, y: 175, labelPosition: 'right' },
    ],
    routes: [
      { id: 'm1', type: 'stairs', name: '메인 계단', seconds: 50 },
      { id: 'm2', type: 'elevator', name: '메인 엘리베이터', seconds: 55, status: '쏘쏘' },
    ],
  },
  '다솔관': {
    elevatorBadge: '엘리베이터 2곳 · 2대',
    stairBadge: '계단 3곳',
    svgPath: 'M54.05 1.25L18.05 36.05L21.65 42.05L15.65 68.45L7.25 67.25L4.85 175.25L10.85 178.85V187.25L1.25 193.25L33.65 223.25L44.45 218.45L50.45 232.85L166.85 229.25L171.65 241.25L216.05 237.65L228.05 224.45L229.25 186.05L220.85 181.25L223.25 54.05L212.45 49.25V42.05L224.45 25.25L223.25 13.25L213.65 6.05L201.65 8.45L193.25 21.65V37.25L183.65 38.45L184.85 22.85L176.45 21.65L174.05 15.65H79.25L72.05 19.25L54.05 1.25ZM86.45 48.05H98.45L111.65 55.25L114.05 50.45H157.25L156.05 160.85L147.65 165.65L145.25 172.85L118.85 174.05L111.65 166.85L93.65 175.25L72.05 172.85L66.05 150.05V69.65L86.45 48.05Z',
    viewBox: '0 0 231 243',
    pins: [
      { id: '1', name: '우측', type: 'stair', x: 197, y: 22, labelPosition: 'left' },
      { id: '2', name: '우측', sub: '1대', type: 'elevator', x: 168, y: 62, labelPosition: 'left' },
      { id: '3', name: '중앙', type: 'stair', x: 172, y: 188, labelPosition: 'below' },
      { id: '4', name: '좌측', type: 'stair', x: 92, y: 188, labelPosition: 'right' },
      { id: '5', name: '화물용', sub: '1대', type: 'elevator', x: 28, y: 222, labelPosition: 'below' },
    ],
    entrances: [
      { label: '입구', x: 200, y: 248 },
    ],
    routes: [
      { id: 'd1', type: 'stairs', name: '좌측 계단', seconds: 40 },
      { id: 'd2', type: 'stairs', name: '우측 계단', seconds: 45 },
      { id: 'd3', type: 'stairs', name: '중앙 계단', seconds: 50 },
      { id: 'd4', type: 'elevator', name: '화물용 엘리베이터', seconds: 85, status: '쏘쏘' },
      { id: 'd5', type: 'elevator', name: '우측 엘리베이터', seconds: 325, status: '빡빡' },
    ],
  },
};

export const BUILDING_NAMES = Object.keys(BUILDING_MAP_DATA);