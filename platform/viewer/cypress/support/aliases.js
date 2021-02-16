//Creating aliases for Cornerstone tools buttons
export function initCornerstoneToolsAliases() {
  cy.get('[data-cy="StackScroll"]').as('stackScrollBtn');
  cy.get('[data-cy="Zoom"]').as('zoomBtn');
  cy.get('[data-cy="Levels"]').as('levelsBtn');
  cy.get('[data-cy="Pan"]').as('panBtn');
  cy.get('[data-cy="Length"]').as('lengthBtn');
  cy.get('[data-cy="Annotate"]').as('annotateBtn');
  cy.get('[data-cy="Angle"]').as('angleBtn');
  cy.get('[data-cy="Reset"]').as('resetBtn');
  cy.get('[data-cy="Cine"]').as('cineBtn');
  cy.get('[data-cy="MoreTools-split-button-secondary"]').as('moreBtn');
  cy.get('[data-cy="GridLayout"]').as('layoutBtn');
  cy.get('.viewport-element').as('viewport');
}

//Creating aliases for Common page elements
export function initCommonElementsAliases() {
  cy.get('[data-cy="trackedMeasurements-btn"]').as('measurementsBtn');
  cy.get('.viewport-element').as('viewport');
  cy.get('[data-cy="seriesList-btn"]').as('seriesBtn');

  // TODO: Panels are not in DOM when closed, move this somewhere else
  cy.get('[data-cy="trackedMeasurements-panel"]').as('measurementsPanel');
  cy.get('[data-cy="studyBrowser-panel"]').as('seriesPanel');
  cy.get('.left-mid.orientation-marker').as('viewportInfoMidLeft');
  cy.get('.top-mid.orientation-marker').as('viewportInfoMidTop');
}

//Creating aliases for Routes
export function initRouteAliases() {
  cy.server();
  cy.route('GET', '**/series**').as('getStudySeries');
  cy.route('GET', '**/studies**').as('getStudies');
}

//Creating aliases for Study List page elements on Desktop experience
export function initStudyListAliasesOnDesktop() {
  cy.get('.study-count').as('studyCount');
  cy.get('#filter-PatientName').as('PatientName');
  cy.get('#filter-PatientID').as('MRN');
  cy.get('#filter-AccessionNumber').as('AccessionNumber');
  cy.get('#start-date').as('studyListStartDate');
  cy.get('#end-date').as('studyListEndDate');
  cy.get('#filter-modalities').as('modalities');
  cy.get('#filter-StudyDescription').as('StudyDescription');
  cy.get('[data-cy="study-list-results"] > tr').as('searchResult');
}

//Creating aliases for Study List page elements on Tablet experience
export function initStudyListAliasesOnTablet() {
  cy.get('.study-count').as('studyCount');
  cy.get('#filter-patientNameOrId').as('patientNameOrMRN');
  cy.get('#filter-accessionOrModalityOrDescription').as(
    'accessionModalityDescription'
  );
  cy.get('#start-date').as('studyListStartDate');
  cy.get('#end-date').as('studyListEndDate');
  cy.get('[data-cy="study-list-results"] > tr').as('searchResult');
}

//Creating aliases for User Preferences modal
export function initPreferencesModalAliases() {
  cy.get('.OHIFModal').as('preferencesModal');
  cy.get('[data-cy="hotkeys"]').as('userPreferencesHotkeysTab');
  cy.get('[data-cy="general"]').as('userPreferencesGeneralTab');
  cy.get('[data-cy="window-level"]').as('userPreferencesWindowLevelTab');
  initPreferencesModalFooterBtnAliases();
}

//Creating aliases for User Preferences modal
export function initPreferencesModalFooterBtnAliases() {
  cy.get('.active [data-cy="reset-default-btn"]').as('restoreBtn');
  cy.get('.active [data-cy="cancel-btn"]').as('cancelBtn');
  cy.get('.active [data-cy="save-btn"]').as('saveBtn');
}
