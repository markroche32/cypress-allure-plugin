Cypress.Commands.add('allure', () => {
    cy.wrap(Cypress.Allure.reporter.getInterface(), { log: false });
});

Cypress.Commands.add(
    'parameter',
    { prevSubject: true },
    (allure, name, value) => {
        allure.parameter(name, value);
        cy.wrap(allure, { log: false });
    }
);

Cypress.Commands.add('severity', { prevSubject: true }, (allure, level) => {
    allure.severity(level);
    cy.wrap(allure, { log: false });
});

Cypress.Commands.add(
    'testAttachment',
    { prevSubject: true },
    (allure, name, content, type) => {
        allure.testAttachment(name, content, type);
        cy.wrap(allure, { log: false });
    }
);

Cypress.Commands.add('owner', { prevSubject: true }, (allure, name) => {
    allure.owner(name);
    cy.wrap(allure, { log: false });
});

Cypress.Commands.add(
    'attachment',
    { prevSubject: true },
    (allure, name, content, type) => {
        allure.attachment(name, content, type);
        cy.wrap(allure, { log: false });
    }
);

Cypress.Commands.add('logStep', { prevSubject: true }, (allure, name, body) => {
    allure.logStep(name, body);
    cy.wrap(allure, { log: false });
});

Cypress.Commands.add('epic', { prevSubject: true }, (allure, name) => {
    allure.epic(name);
    cy.wrap(allure, { log: false });
});
Cypress.Commands.add('feature', { prevSubject: true }, (allure, name) => {
    allure.feature(name);
    cy.wrap(allure, { log: false });
});
Cypress.Commands.add('story', { prevSubject: true }, (allure, story) => {
    allure.story(story);
    cy.wrap(allure, { log: false });
});
Cypress.Commands.add('suite', { prevSubject: true }, (allure, name) => {
    allure.suite(name);
    cy.wrap(allure, { log: false });
});

Cypress.Commands.add('label', { prevSubject: true }, (allure, name, value) => {
    allure.label(name, value);
    cy.wrap(allure, { log: false });
});

Cypress.Commands.add(
    'link',
    { prevSubject: true },
    (allure, url, name, type) => {
        allure.link(url, name, type);
        cy.wrap(allure, { log: false });
    }
);
Cypress.Commands.add('issue', { prevSubject: true }, (allure, name, url) => {
    const baseUrl = Cypress.env('allureIssueUrl');
    allure.issue(name, baseUrl ? `${baseUrl}/${url}` : url);
    cy.wrap(allure, { log: false });
});
Cypress.Commands.add('tms', { prevSubject: true }, (allure, name, url) => {
    const baseUrl = Cypress.env('allureTmsUrl');
    allure.tms(name, baseUrl ? `${baseUrl}/${url}` : url);
    cy.wrap(allure, { log: false });
});
Cypress.Commands.add(
    'description',
    { prevSubject: true },
    (allure, markdown) => {
        allure.description(markdown);
        cy.wrap(allure, { log: false });
    }
);
Cypress.Commands.add(
    'descriptionHtml',
    { prevSubject: true },
    (allure, html) => {
        allure.descriptionHtml(html);
        cy.wrap(allure, { log: false });
    }
);
Cypress.Commands.add('tag', { prevSubject: true }, (allure, tag) => {
    allure.tag(tag);
    cy.wrap(allure, { log: false });
});

Cypress.Commands.add(
    'writeEnvironmentInfo',
    { prevSubject: true },
    (allure, info) => {
        allure.writeEnvironmentInfo(info);
        cy.wrap(allure, { log: false });
    }
);

Cypress.Commands.add(
    'writeCategoriesDefinitions',
    { prevSubject: true },
    (allure, categories) => {
        allure.writeCategoriesDefinitions(categories);
        cy.wrap(allure, { log: false });
    }
);
