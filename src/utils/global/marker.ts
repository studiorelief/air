import markerSDK from '@marker.io/browser';
export async function initMarker() {
  await markerSDK.loadWidget({
    project: '6777e87de38da678c59baae6',
  });
}
