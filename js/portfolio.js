// Import data management functions
import { loadPortfolioData, savePortfolioData } from './data-manager.js';

// DOM Elements
const tableBody = document.querySelector('#portfolio-table tbody');
const addButton = document.getElementById('add-row');

// Initialize table
async function initPortfolioTable() {
    try {
        const projects = await loadPortfolioData();
        renderTable(projects);
        setupEventListeners();
    } catch (error) {
        showError('Failed to load portfolio data');
    }
}

// Render table with data
function renderTable(projects) {
    tableBody.innerHTML = projects.map(project => `
        <tr data-id="${project.id}">
            <td>${project.id}</td>
            <td contenteditable="true">${project.name}</td>
            <td contenteditable="true">${project.description}</td>
            <td><input type="date" value="${project.date}"></td>
            <td>
                <button class="save-btn">💾 Save</button>
                <button class="delete-btn">🗑️ Delete</button>
            </td>
        </tr>
    `).join('');
}

// Event setup
function setupEventListeners() {
    addButton.addEventListener('click', addNewRow);
    tableBody.addEventListener('focusout', handleContentEdit);
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', initPortfolioTable);
