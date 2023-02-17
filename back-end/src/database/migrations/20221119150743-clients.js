module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('clients', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            sobrenome: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },

            telefone: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },

            senha_hash: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            confirmar_senha_hash: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },

            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    async down(queryInterface) {
        queryInterface.dropTable('clients');
    },
};
